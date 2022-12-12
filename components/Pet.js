import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


import {getCustomer} from '../db/customersApi'

const numColumns = 2;
const itemHPadding = 1;
const screenWidth = Dimensions.get("window").width - (80 + (itemHPadding*4));; //20+20 layout hpadding of layout
const tileSize = screenWidth / numColumns;


const Pet = ({pet}) => {
  useEffect(() =>{
  }, [])
  var myImage = null
  if(pet.petType=="Gato"){myImage = require('../assets/gatoFormulario.png')}
  else{myImage = require('../assets/perroFormulario.png')}

  //onPress={() => navigation.navigate('EditPet')} (onPress del touchable)
 
 return (
    
    <TouchableOpacity>
    <View style = {styles.itemMainContainer}>
        <Image source={myImage} style = {styles.itemImage}/>
        <Text style={{fontSize: 14,paddingBottom: 2,color:'white',}}>{pet.petName}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemImage:{
    width: 70,
    height:55,
    color:"#ffffff",
    borderRadius:100,
  },
  itemMainContainer: {
    display: 'flex',
    backgroundColor: '#51A8BB',
    height: tileSize/2,
    width: tileSize,
    marginBottom: itemHPadding,
    marginHorizontal: itemHPadding*2,
    borderRadius: 24,
    alignItems: 'center',
  },
});

export default Pet
