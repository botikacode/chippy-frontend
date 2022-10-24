import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const JobItem = ({job}) => {
  return (
    <View style = {styles.itemMainContainer}>
      <View style = {styles.itemRightContainer}>
        <Image source={require('../assets/accountImage.jpg')} style = {styles.itemImage}/>
      </View>
      <View style={styles.itemLeftContainer}>
        <Text style={styles.itemTitle}>{job.title}</Text>
        <Text style={styles.itemText}>{job.description}</Text>
        <View style={styles.itemFooter }>
          <Text style={styles.itemText}><Ionicons name="star" style={{ color: 'yellow' }}/>{'(Val.)'}</Text>
          <Text style={styles.itemText}><Ionicons name="time-outline" style={{ color: 'lightblue' }}/>{'(Tiem.)'}</Text>
          <Text style={styles.itemText}><Ionicons name="cash" style={{ color: '#C3FF67' }}/>{job.price}€</Text>
        </View>
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
    marginLeft: 10, marginRight: 10,
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

export default JobItem
