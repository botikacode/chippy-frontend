import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import { getJob, updateJob, deleteJob, saveJob } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'
import {getCustomer} from '../db/customersApi'
import {getPetJobByJobId} from '../db/petJobsApi'
import {getPet} from '../db/petsApi'
import JobDetailsHeaderComponent from '../components/JobDetailsHeaderComponent'
import LayoutWithCollapsibleHeader from '../components/LayoutWithCollapsibleHeader'
import SnowFlakes from '../components/SnowFlakes'
import EuroIcon from 'react-native-vector-icons/FontAwesome'

const JobDetailsScreen = ({route, navigation}) => {
  const [job, setJob] = useState([])
  const [requesterUser, setRequesterUser] = useState([])
  const [enableButton, setEnableButton] = useState()
  const [pet, setPet] = useState([])

  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [startHour, setStartHour] = useState()
  const [endHour, setEndHour] = useState()

  const [snowFlake1, setSnowFlake1] = useState(false)
  const [snowFlake2, setSnowFlake2] = useState(false)
  const [snowFlake3, setSnowFlake3] = useState(false)

  const loadParams = async () => {

    setJob(route.params)
    let customer = await getCustomer(route.params.requesterId)
    setRequesterUser(customer)
  }
  const obtainPet = async () => {
    let petJob = await getPetJobByJobId(route.params.id);
    let pet = await getPet(petJob.petId);
    setPet(pet);
  }

  const formatDateHour = () => {
    setStartHour(route.params.startDate.substr(10,15))
    setEndHour(route.params.endDate.substr(10,15))
    setStartDate(route.params.startDate.substr(0,10))
    setEndDate(route.params.endDate.substr(0,10))
  }

  const acceptWork = async () => {
    let user = await getCurrentUser()
    delete job.enableButton
    if(user){
      job.interestedId =  user.id
    }
    await updateJob(job.id, job)
    navigation.navigate('JobsScreen')
  }

  const paintSnowFlakes = () => {
    if(route.params.snowFlakes == 1) {setSnowFlake1(true); setSnowFlake2(false); setSnowFlake3(false)}
    else if(route.params.snowFlakes == 2) {setSnowFlake1(true); setSnowFlake2(true); setSnowFlake3(false)}
    else if(route.params.snowFlakes == 3) {setSnowFlake1(true); setSnowFlake2(true); setSnowFlake3(true); console.log("Entro")}
    else {setSnowFlake1(false); setSnowFlake2(false); setSnowFlake3(false)}
  }

  useEffect(() => {
    loadParams()
    obtainPet()
    formatDateHour()
    paintSnowFlakes()
  }, [])
  let jobDetailsHeaderComponent = <JobDetailsHeaderComponent title={job.title} type={job.jobType} startDate={startDate} endDate={endDate}/>
  return (
    <LayoutWithCollapsibleHeader component={jobDetailsHeaderComponent}>
      <Text style={styles.textStartHour}>{startHour}</Text>
      <div style={{borderLeft: "1px solid blue", height: "20px", position:'absolute', top:93, left:265}}/>
      <Text style={styles.textEndHour}>{endHour}</Text>
      <Text style={styles.textUser}>{requesterUser.firstName} {requesterUser.lastName}</Text>


      <View style={styles.snowFlakeView}>
        <SnowFlakes relleno1={snowFlake1} relleno2={snowFlake2} relleno3={snowFlake3} visibility={job.snowFlakes ? true : false}/>
      </View>

      {!job.snowFlakes &&
        <View style={styles.euroView}>
          <Text style={styles.textPrice}>{job.price}</Text>
          <EuroIcon name="euro" size={25}/>
        </View>
      }
      <View style={styles.viewPet}>
        <Text style={styles.textHelp}>Animal</Text>
        <View style={styles.textPet}>
          <Text style={styles.textPetName}>{pet.petName}</Text>
          <Text style={styles.textPetName}>({pet.petType})</Text>
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.textHelp}>Descripción</Text>
        <Text style={styles.textDescription}>{job.description}</Text>
      </View>

        <div style={job.enableButton ? styles.visibleDiv : styles.hiddenDiv}>
          <TouchableOpacity  style={styles.buttonCeleste}
              onPress={() => acceptWork()}>
            <Text style={styles.buttonText}>Aceptar trabajo</Text>
          </TouchableOpacity>
        </div>
    </LayoutWithCollapsibleHeader>
  )
}

const styles = StyleSheet.create({
  textUser: {
    position: 'absolute',
    top: 55,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "22px",
    color: "#2A6D7A"
  },
  textDate: {
    width: "92px",
    height: "22px",
    top: "248px",
    left: "194px",
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: "22px",
  },
  textStartHour: {
    position: 'absolute',
    top: 70,
    left: 230,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "16px",
    color: "#2A6D7A"
  },
  textEndHour: {
    position: 'absolute',
    top: 120,
    left: 230,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "16px",
    color: "#2A6D7A"
  },
  snowFlakeView: {
    position: 'absolute',
    top: 70,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "16px",
    color: "#2A6D7A"
  },
  euroView: {
    position: 'absolute',
    flexDirection: 'row',
    top: 110,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "16px",
    color: "#2A6D7A"
  },
  textPrice: {
    top: 90,
    paddingTop: 5,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "16px",
  },
  viewPet: {
    position: 'absolute',
    top: 150,
  },
  textPet: {
    flexDirection: 'row',
  },
  textPetName: {
    fontFamily: 'Nunito',
    fontWeight: 700,
    marginRight: 15,
    fontSize: 25,
    lineHeight: "22px",
    color: "#2A6D7A"
  },
  description: {
    position: 'absolute',
    top: 220,
  },
  textHelp: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 15,
    lineHeight: "22px",
    color: "#B1D8DE"
  },
  textDescription: {
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 25,
    lineHeight: "22px",
    color: "#2A6D7A"
  },
  itemGroup: {
    flexDirection:"row",
  },
  buttonView: {
    position: 'absolute',
    top:250,
    justifyContent: 'center',
    alignItems: 'center'
  },
buttonCeleste: {
  borderRadius: 15,
  backgroundColor: "#0094FF",
  width: "50%",
  height: 30,
  paddingTop: 10,
  marginTop: 24,
  paddingBottom: 10,
  marginBottom: 3,
  marginLeft: 10,
  width: "50%",
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
