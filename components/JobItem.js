import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const JobItem = ({job}) => {
  return (
    <View style = {styles.itemContainer}>
      <Text style={styles.itemTitle}>{job.title}</Text>
      <Text style={styles.itemTitle}>{job.description}</Text>
      <Text style={styles.itemTitle}>{job.price}€</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemTitle: {
    color:"#ffffff"
  }
});

export default JobItem