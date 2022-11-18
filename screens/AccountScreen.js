import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import UploadImageScreen from '../screens/UploadImageScreen';

import {getCustomer} from '../db/customersApi'
import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'
import Button from '../components/ButtonType0'
import MyReqJobsScreen from '../screens/MyReqJobsScreen'


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountScreen = ({ navigation }) => {
  const [customer, setData] = useState([])



  const loadCustomer = async () =>{
    const data = await getCustomer(1) // Insertar aquí la id del User logeado
    setData(data)
  }

  const Stack = createNativeStackNavigator();

  useEffect(() =>{
    loadCustomer()
  }, [])

  var myImage = getImageUrl(customer);

  return (

  <Layout>
    <View style = {styles.imageNameContainer}>
    <TouchableOpacity onPress={() => navigation.navigate('UploadImageScreen')}>
      <Image source={myImage} style = {styles.itemImage}/>
    </TouchableOpacity>
    <Text style={styles.input}>{customer.firstName} {customer.lastName}</Text>
    </View>

    <Button>
    <TouchableOpacity onPress={() => navigation.navigate('MyReqJobsScreen')}>
      <Text>{'Mis trabajos'}</Text>
    </TouchableOpacity>
    </Button>

    <View style={styles.dogPortrait}>
      <View style={styles.line}/>
      <View style={{padding: 100}}/>
      <View style={styles.line}/>
    </View>

    <View style={styles.commentContainer}>
      <Text style={styles.commentTextTitle}>Comentarios recientes: </Text>
    </View>
  </Layout>
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
