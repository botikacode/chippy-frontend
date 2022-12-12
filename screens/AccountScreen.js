import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import UploadImageScreen from '../screens/UploadImageScreen';

import {getCustomer} from '../db/customersApi'
import {getUserComments} from '../db/commentsApi'
import { getUserPets } from '../db/petsApi'
import Layout from '../components/Layout'
import CommentsList from '../components/CommentsList'
import SearchFilter from '../components/SearchFilter'
import { getCurrentUser } from '../persistentData'
import ButtonType0 from '../components/ButtonType0'
import MyReqJobsScreen from '../screens/MyReqJobsScreen'
import PetsList from '../components/PetsList'

import Button from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountScreen = ({ navigation, route }) => {
  const [customer, setData] = useState([])
  const [comments, setDataComments] = useState([])

  const [pets, setPets] = useState([])
  const loadPets = async () => {
    const user = await getCurrentUser()
    if(user){
      const data = await getUserPets(user.id)
      setPets(data)
  }
  }
  useEffect(() => {
    loadPets()
  }, [])

  const loadComments = async () =>{
    let user = await getCurrentUser()
    if(user){
      const data = await getUserComments(user.id)
      setDataComments(data)
    }
  }
  const loadCustomer = async () =>{
    let user = await getCurrentUser()
    if(user){
      setData(user)
    }
  }

  const Stack = createNativeStackNavigator();

  useEffect(() =>{
    loadCustomer()
  }, [])
  useEffect(() =>{
    loadComments()
  }, [])

  var myImage = getImageUrl(customer);

  function getImageUrl(customer){
    var myImage = require('../assets/accountImage.jpg')

    if(customer.image && customer.image != 'URLImage'){
      myImage = require('../assets/'+customer.image);
    }
    return myImage;
  }

  return (

  <View>
    <View style={styles.outContainer}>
      <View style={styles.cabecera}>
        <View style = {styles.imageNameContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('UploadImageScreen')}>
            <Image source={myImage} style = {styles.itemImage}/>
          </TouchableOpacity>
          <Text style={styles.nameText}>{customer.firstName +" "+ customer.lastName}</Text>
        </View>
      </View>
      <Text style={styles.titulosText}>Mis Mascotas</Text>
      <ScrollView>
      <View style={styles.innerContainer}>
        <View style={{ flex: 1 }}>
          <PetsList pets={pets}/>
        </View>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonCeleste}
        onPress={() => navigation.navigate("AddPet")}>
        <Text style={styles.buttonText}>Mascota (+)</Text>
      </TouchableOpacity>
      <Text style={styles.titulosText}>Comentarios recientes</Text>
      <ScrollView>
        <View style={styles.innerContainer}>
          <View style={{ flex: 1 }}>
          <CommentsList comments={comments}/>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("StartScreen")}>
            <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>

      
      <TouchableOpacity style={styles.buttonTareas} onPress={() => navigation.navigate('MyReqJobsScreen')}>
        <Text style={styles.buttonText}>MisTareas</Text>
      </TouchableOpacity>
      

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

cabecera: {
  alignContent: 'center',
  backgroundColor:'#51A8BB',
  borderBottomEndRadius: 40,
  borderBottomStartRadius: 40,
  paddingBottom: 20,
  width:'100%',
},
imageNameContainer: {
  display: 'flex',
  flexDirection: "row",
  marginVertical: 2,
  marginHorizontal:2,
  padding:10,
  borderRadius: 6,
},
itemImage:{
  width: 120,
  height:120,
  borderRadius:100,
  marginLeft:10,
  marginTop:10,
},
nameText: {
  fontSize: 30,
  margin: 40,
  flex: 1,
  padding: 10,
  color: '#FAFAFA',
},
buttonText: {
  color: "#fff",
  textAlign: "center",
},
outContainer: {
  justifyContent: 'center',
  alignItems: 'center',
},
buttonCeleste: {
  alignContent: 'center',
  marginTop: 10,
  paddingTop: 7,
  paddingBottom: 7,
  borderRadius: 5,
  marginBottom: 3,
  backgroundColor: "#51A8BB",
  width: "25%",
},
buttonTareas: {
  alignContent: 'center',
  marginTop: 5,
  paddingTop: 7,
  paddingBottom: 7,
  borderRadius: 5,
  marginBottom: 3,
  backgroundColor: "#51A8BB",
  width: "25%",
},
titulosText: {
  fontWeight: "bold",
  fontSize: 16,
  padding: 10,
  textAlign: "left",
  color: "#51A8BB",
},
innerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf:'baseline',
  maxHeight:200,
  maxWidth:'100%',
}

});

export default AccountScreen


/* <TouchableOpacity style={styles.buttonCeleste}
          onPress={() => navigation.navigate("ListPetsScreen")}>
        <Text style={styles.buttonText}>Ver mis mascotas</Text>
      </TouchableOpacity>    "#2A6D7A"       "#0094FF"
 */