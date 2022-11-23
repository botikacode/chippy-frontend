import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {getCustomer} from '../db/customersApi'

const Pet = ({pet}) => {
  useEffect(() =>{
  }, [])

  return (
    <View style = {styles.itemMainContainer}>
      <View style={styles.itemLeftContainer}>
        <Text style={styles.itemText}>{pet.petName}</Text>
      </View>
    </View>
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
    marginVertical: 2,
    marginHorizontal:2,
    padding:10,
    borderRadius: 6,
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
