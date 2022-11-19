import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import UploadImageScreen from '../screens/UploadImageScreen';

import {getCustomer} from '../db/customersApi'
import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'

import Button from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountScreen = ({ navigation, route }) => {
  const [customer, setData] = useState([])



  const loadCustomer = async () =>{
    const data = await getCustomer(route.params.idSesion) // Insertar aquí la id del User logeado
    setData(data)
  }

  const Stack = createNativeStackNavigator();

  useEffect(() =>{
    loadCustomer()
  }, [])

  var myImage = getImageUrl(customer);

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
    </View>

    <View style={styles.outContainer}>
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("StartScreen")}>
          <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>

  </View>
  
  )
}

function getImageUrl(customer){
  var myImage = require('../assets/accountImage.jpg')

  if(customer.image && customer.image != 'URLImage'){
    myImage = require('../assets/'+customer.image+'.jpg');
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
buttonText: {
  color: "#fff",
  textAlign: "center",
},
dogContainer: {
  display: 'flex',
  flexDirection: "row",
  marginVertical: 30,
  marginHorizontal:2,
  padding:150,
  borderRadius: 6,
},
outContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},
commentContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},
buttonCeleste: {
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 5,
  marginBottom: 3,
  backgroundColor: "#0094FF",
  width: "90%",
},
commentTextTitle: {
  fontSize: 20,
  padding: 30
}
});

export default AccountScreen
