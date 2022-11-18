import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import UploadImageScreen from '../screens/UploadImageScreen';

import {getCustomer} from '../db/customersApi'
import {getComments} from '../db/commentsApi'
import Layout from '../components/Layout'
import CommentsList from '../components/CommentsList'
import SearchFilter from '../components/SearchFilter'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountScreen = ({ navigation }) => {
  const [customer, setData] = useState([])
  const [comments, setDataComments] = useState([])
  const [filteredComments, setFilteredComments] = useState(comments)

  const loadComments = async () =>{
    const data = await getComments() // Insertar aquí la id del User logeado
    setDataComments(data)
  }
  const loadCustomer = async () =>{
    const data = await getCustomer(1) // Insertar aquí la id del User logeado
    setData(data)
  }

  const Stack = createNativeStackNavigator();

  useEffect(() =>{
    loadCustomer()
  }, [])
  useEffect(() =>{
    loadComments()
  }, [])


  var myImage = getImageUrl(customer);
/*
<Layout>
  <CommentsList comments={comments} filteredComments={comments}/>
</Layout>
*/
  return (

  <View>
    <View style = {styles.imageNameContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('UploadImageScreen')}>
      <Image source={myImage} style = {styles.itemImage}/>
    </TouchableOpacity>
    <Text style={styles.input}>{customer.firstName} {customer.lastName}</Text>
    </View>



    <View style={styles.dogPortrait}>
      <View style={styles.line}/>
      <View style={{padding: 100}}/>
      <View style={styles.line}/>
    </View>

    <View style={styles.commentContainer}>
      <Text style={styles.commentTextTitle}>Comentarios recientes: </Text>
      <Layout>
        <CommentsList comments={comments} filteredComments={comments}/>
      </Layout>
    </View>
  </View>
  )
}

function getImageUrl(customer){
  var myImage = require('../assets/accountImage.jpg')

  if(customer.image && customer.image != 'URLImage'){
    myImage = require('../assets/'+customer.image);
  }
  return myImage;
}

const styles = StyleSheet.create({
imageNameContainer: {
  display: 'flex',
  flexDirection: "row",
  marginVertical: 2,
  marginHorizontal:2,
  padding:10,
  borderRadius: 6,
},
itemLeftContainer:{
  flex: 1,
},
line: {
  borderWidth: 0.1,
  borderColor:'black',
  margin:10
},
dogPortrait: {
  padding: 20
},
itemImage:{
  width: 120,
  height:120,
  borderRadius:100,
},
input: {
  fontSize: 25,
  borderRadius: 10,
  MarginRight: 100,
  height: 40,
  margin: 30,
  flex: 1,
  padding: 10,
},
dogContainer: {
  display: 'flex',
  flexDirection: "row",
  marginVertical: 30,
  marginHorizontal:2,
  padding:150,
  borderRadius: 6,
},
commentContainer: {

},
commentTextTitle: {
  fontSize: 20,
  padding: 30
}
});

export default AccountScreen
