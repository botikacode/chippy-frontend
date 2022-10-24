import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const JobItem = ({job}) => {
  return (
    <View style = {styles.itemContainer}>
      <Text style={styles.itemTitle}>{job.title}</Text>
      <Text style={styles.itemText}>{job.description}</Text>
      <Text style={styles.itemPrice}>{job.price}€</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    backgroundColor: '#2471A3',
    marginVertical: 2,
    marginHorizontal:2,
    padding:10,
    borderRadius: 6,
  },
  itemTitle: {
    color:"#ffffff",
    fontSize: 20,
  },
  itemText: {
    color:"#ffffff",
    fontSize: 16,
  },
  itemPrice: {
    textAlign: 'right',
    color:"#ffffff",
    fontSize: 14,
  }
});

export default JobItem