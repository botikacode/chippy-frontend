import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const numColumns = 2;
const itemHPadding = 1;
const screenWidth = Dimensions.get("window").width - (80 + (itemHPadding*4));; //20+20 layout hpadding of layout
const tileSize = screenWidth / numColumns;

const JobItem = ({job, navigation, enableButton}) => {
  job.enableButton = enableButton
    var myImage = null
    if(job.jobType=="Cuidar"){myImage = require('../assets/casa_perro.png')}
    else{myImage = require('../assets/paseo.png')}

  return (
    <TouchableOpacity onPress={() => navigation.navigate('JobDetailsScreen', job)}>
    <View style = {styles.itemMainContainer}>
      <Image source={myImage} style = {styles.itemImage}/>
      <Text style={{fontSize: 14,paddingBottom: 2,color:'white',}}>{job.title}</Text>
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
  itemPrice: {
    textAlign: 'right',
    color:"#ffffff",
    fontSize: 12,
  }
});

export default JobItem
