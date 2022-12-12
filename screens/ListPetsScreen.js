import { View, StyleSheet, Text, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import PetsList from '../components/PetsList'
import { getUserPets } from '../db/petsApi'
import { getCurrentUser } from '../persistentData'
import LayoutWithCollapsibleHeader from '../components/LayoutWithCollapsibleHeader'
import { ScrollView } from 'react-native-web'

const ListPetsScreen = () => {

  const [pets, setPets] = useState([])

  const loadPets = async () => {
    const user = await getCurrentUser()
    if(user){
      const data = await getUserPets(user.id)
      setPets(data)
  }
  }

  useEffect(() => {
    loadPets()
  }, [])

  return (
    <ScrollView>
      <View style={styles.outContainer}>
        <View style={{ flex: 1 }}>
          <PetsList pets={pets}/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  outContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListPetsScreen
