import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {getCustomer} from '../db/customersApi'

const SnowFlakeCounter = ({number}) => {


  useEffect(() =>{
    loadCustomer()
  }, [])


  return (
    <View style = {styles.itemMainContainer}>
      <View style = {styles.itemRightContainer}>
        <Image source={myImage} style = {styles.itemImage}/>
      </View>
      <View style={styles.itemLeftContainer}>
        <Text style={styles.itemTitle}>{commentator.firstName} {commentator.lastName}</Text>
        <Text style={styles.itemText}>{com.content}</Text>
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
    borderRadius:100,
  },
  itemMainContainer: {
    display: 'flex',
    flexDirection: "row",
    marginVertical: 2,
    marginHorizontal:2,
    padding:10,
    borderRadius: 6,
  }
});

export default SnowFlakeCounter
