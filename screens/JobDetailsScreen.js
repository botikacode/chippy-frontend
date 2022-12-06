import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import { getJob, updateJob, deleteJob, saveJob } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'
import {getCustomer} from '../db/customersApi'

const JobDetailsScreen = ({route, navigation}) => {
  const [job, setJob] = useState([])
  const [requesterUser, setRequesterUser] = useState([])
  const [enableButton, setEnableButton] = useState()

  const loadParams = async () => {

    setJob(route.params)
    let customer = await getCustomer(route.params.requesterId)
    setRequesterUser(customer)
  }

  const acceptWork = async () => {
    let user = await getCurrentUser()
    delete job.enableButton
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
      <Text>{job.startDate}</Text>
      <Text>{job.endDate}</Text>
      <Text>{requesterUser.firstName} {requesterUser.lastName}</Text>
      <Text>{job.enableButton}</Text>
      <div style={job.enableButton ? styles.visibleDiv : styles.hiddenDiv}>
        <TouchableOpacity  style={styles.buttonCeleste}
            onPress={() => acceptWork()}>
          <Text style={styles.buttonText}>Aceptar trabajo</Text>
        </TouchableOpacity>
      </div>
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
},
visibleDiv: {
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 5,
  marginBottom: 3,
  width: "100%",
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center',
  visibility: "visible"
},
hiddenDiv: {
visibility: "hidden"
},
});
export default JobDetailsScreen
