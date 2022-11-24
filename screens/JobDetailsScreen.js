import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import { getJob, updateJob, deleteJob, saveJob } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'
import {getCustomer} from '../db/customersApi'

const JobDetailsScreen = ({route, navigation}) => {
  const [job, setJob] = useState([])
  const [requesterUser, setRequesterUser] = useState([])

  const loadParams = async () => {

    setJob(route.params)
    let customer = await getCustomer(route.params.requesterId)
    setRequesterUser(customer)
  }

  const acceptWork = async () => {
    let user = await getCurrentUser()
    if(user){
      job.interestedId =  user
    }
    await updateJob(job.id, job)
    navigation.navigate('JobsScreen')
  }

  useEffect(() => {
    loadParams()
  }, [])

  return (
    <Layout>
      <Text>{job.title}</Text>
      <Text>{job.jobType}</Text>
      <Text>{job.description}</Text>
      <Text>{job.price}€</Text>
      <Text>{requesterUser.firstName} {requesterUser.lastName}</Text>
      <TouchableOpacity style={styles.buttonCeleste}
          onPress={() => acceptWork()}>
        <Text style={styles.buttonText}>Aceptar trabajo</Text>
      </TouchableOpacity>
    </Layout>
  )
}

const styles = StyleSheet.create({
buttonCeleste: {
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 5,
  marginBottom: 3,
  backgroundColor: "#0094FF",
  width: "50%",
  justifyContent: 'center',
  alignItems: 'center',
}
});
export default JobDetailsScreen
