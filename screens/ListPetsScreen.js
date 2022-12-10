import { View, Text, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import PetsList from '../components/PetsList'
import { getUserPets } from '../db/petsApi'
import { getCurrentUser } from '../persistentData'

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
    <Layout>
    <PetsList pets={pets}/>
    </Layout>
  )
}

export default ListPetsScreen
