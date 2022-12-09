import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const numColumns = 2;
const itemHPadding = 1;
const screenWidth = Dimensions.get("window").width - (40 + (itemHPadding*4));; //20+20 layout hpadding of layout
const tileSize = screenWidth / numColumns;

const JobItem = ({job}) => {
  return (
    <View style = {styles.itemMainContainer}>
      <View style = {styles.itemRightContainer}>
      </View>
      <View style={styles.itemLeftContainer}>
        <Text style={styles.itemTitle}>{job.title}</Text>       
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
    marginHorizontal: 16,
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
    backgroundColor: '#51A8BB',
    height: tileSize, 
    width: tileSize,
    marginBottom: 2,
    marginHorizontal: itemHPadding,
    padding: 10,
    borderRadius: 24,
  },
  itemRightContainer:{
    marginRight:10,
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

export default JobItem
