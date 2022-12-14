import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'

import {getCustomer} from '../db/customersApi'
import {getUserComments} from '../db/commentsApi'
import { getUserPets } from '../db/petsApi'
import Layout from '../components/Layout'
import CommentsList from '../components/CommentsList'
import SearchFilter from '../components/SearchFilter'
import { getJobsUser } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'

import ButtonType0 from '../components/ButtonType0'
import PetsList from '../components/PetsList'

import JobList from '../components/JobList'

import Button from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AccountScreen = ({ navigation, route }) => {
  const [customer, setData] = useState([])
  const [comments, setDataComments] = useState([])
  const [pets, setPets] = useState([])
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const loadUserData = async () => {
    const user = await getCurrentUser()
    if(user){
      const pets = await getUserPets(user.id)
      const jobs = await getJobsUser(user.id)
      setJobs(jobs)
      setPets(pets)
      setData(user)
    }
  }

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
  const loadJobs = async () => {
    const user = await getCurrentUser()
    if(user){
      const jobs = await getJobsUser(user.id)
      setJobs(jobs)
    }
  }

  useEffect(() => {
    loadUserData()
  }, [])

  let myImage = getImageUrl(customer);

  function getImageUrl(customer){
    myImage = require('../assets/accountImage.jpg')

    if(customer.image && customer.image != 'URLImage'){
      myImage = require('../assets/'+customer.image);
    }
    return myImage;
  }

  return (
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
          <PetsList pets={pets} navigation={navigation}/>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonCeleste}
        onPress={() => navigation.navigate("AddPet")}>
        <Text style={styles.buttonText}>Mascota (+)</Text>
      </TouchableOpacity>
      <Text style={styles.titulosText}>Mis Tareas</Text>
      <ScrollView>
        <View style={styles.innerContainer}>
        <JobList jobs={jobs} filteredJobs={filteredJobs} navigation={navigation}/>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("StartScreen")}>
            <Text style={styles.buttonText}>Cerrar sesión</Text>
        </TouchableOpacity>
    </View>
  
  )
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
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf:'baseline',
  maxHeight:190,
  maxWidth:'100%',
}

});

export default AccountScreen