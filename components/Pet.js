import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {getCustomer} from '../db/customersApi'

const numColumns = 2;
const itemHPadding = 1;
const screenWidth = Dimensions.get("window").width - (40 + (itemHPadding*4));; //20+20 layout hpadding of layout
const tileSize = screenWidth / numColumns;


const Pet = ({pet}) => {
  useEffect(() =>{
  }, [])

 return (
    <TouchableOpacity onPress={() => navigation.navigate('EditPet')}>
    <View style = {styles.itemMainContainer}>
      <View style = {styles.itemRightContainer}>
      </View>
      <View style={styles.itemLeftContainer}>
        <Text style={styles.itemText}>{pet.petName}</Text>
        <Text style={styles.itemText}>{pet.petType}</Text>
      </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemFooter:{
    marginTop: 20,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center'
  },
  itemImage:{
    width: 80,
    height:80,
    color:"#ffffff",
    borderRadius:100,
  },
  itemMainContainer: {
    display: 'flex',
    flexDirection: "row",
    backgroundColor: '#51A8BB',
    height: tileSize,
    width: tileSize,
    marginBottom: 2,
    marginHorizontal: itemHPadding,
    padding: 10,
    borderRadius: 24,
  },
  itemRightContainer:{
    marginRight:20,
  },
  itemLeftContainer:{
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemText: {
    fontSize: 12,
  },
  itemPrice: {
    textAlign: 'right',
    color:"#ffffff",
    fontSize: 12,
  }
});

export default Pet
