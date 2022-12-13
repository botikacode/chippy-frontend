import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'

const PetDetailsScreen = ({route, navigation}) => {
  const [pet, setPet] = useState([])

  const loadParams = async () => {
    setPet(route.params)
  }

  useEffect(() => {
    loadParams()
  }, [])

  return (
    <Layout>
      <View style={styles.containerUp}>
        <Text>{pet.petName}</Text>
      </View>
      <View style={styles.containerDown}>
        <Text>{pet.description}</Text>
      </View>
      
    </Layout>
  )
}

const styles = StyleSheet.create({
  containerUp: {
    paddingTop: 100,
  },
  containerDown:{
    paddingTop: 20,
  }
});

export default PetDetailsScreen
