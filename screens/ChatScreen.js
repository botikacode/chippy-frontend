import React from 'react'

import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Layout from '../components/Layout';


const ChatScreen = ({ navigation, route }) => {
  return (
    <Layout> 
      <TouchableOpacity style={styles.fabLocationBL}>
          
          <View style={styles.fab}>
            <Text style={styles.fabText}>Tarea (+)</Text>
          </View>
      </TouchableOpacity>
    </Layout>
  )
}



const styles = StyleSheet.create({
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 80,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',

  }
})
export default ChatScreen