import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import {getCustomer} from '../db/customersApi'

const Comment = ({com}) => {
  const [commentator, setData] = useState([])

  const loadCustomer = async () =>{
    const data = await getCustomer(com.commentatorId) // Insertar aquí la id del User logeado
    setData(data)
  }

  useEffect(() =>{
    loadCustomer()
  }, [])

  var myImage = getImageUrl(commentator);

  function getImageUrl(commentator){
    var myImage = require('../assets/accountImage.jpg')

    if(commentator.image && commentator.image != 'URLImage'){
      myImage = require('../assets/'+commentator.image);
    }
    return myImage;
  }

  return (
    <View style = {styles.itemMainContainer}>
      <View style = {styles.itemRightContainer}>
        <Image source={myImage} style = {styles.itemImage}/>
      </View>
      <View style={styles.itemLeftContainer}>
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
  },
  itemRightContainer:{
    marginRight:20,
  },
  itemLeftContainer:{
    flex: 1,
  },
  itemTitle: {
    color:"#ffffff",
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

export default Comment
