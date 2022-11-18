import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Comment = ({com}) => {
  return (
    <View style = {styles.itemMainContainer}>
      <View style = {styles.itemRightContainer}>
        <Image source={require('../assets/accountImage.jpg')} style = {styles.itemImage}/>
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
    backgroundColor: '#2471A3',
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
    color:"#ffffff",
    fontSize: 12,
  },
  itemPrice: {
    textAlign: 'right',
    color:"#ffffff",
    fontSize: 12,
  }
});

export default Comment
