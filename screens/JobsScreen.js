import React, {useEffect, useState} from 'react'
import {getJobs, getJobsNotUser} from '../db/jobsApi'
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'
import AppBar from '../components/AppBar'
import CustomModal from '../components/Modal'
import JobDetaisScreen from '../screens/JobDetailsScreen'
import {initialFilter} from '../data/initialFilter'
import { getCurrentUser } from '../persistentData'
import LayoutWithCollapsibleHeader from '../components/LayoutWithCollapsibleHeader'
import JobListHeaderComponent from '../components/JobListHeaderComponent'

const JobsScreen = ({ navigation, route }) => {

  const [jobs, setJobs] = useState([])

  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [filter, setFilter] = useState(initialFilter);
  const [intermediateFilter, setIntermediateFilter] = useState(initialFilter)
  const [modalVisible, setModalVisible] = useState(false)
  const [isModalJobVisible, setModalJobVisible] = useState(true);
  const jobTypesResult = jobs.map(item => item.jobType).filter((value, index, self) => self.indexOf(value) === index)

  const loadJobs = async () =>{

      let user = await getCurrentUser()
      if(user){
        const data = await getJobsNotUser(user.id)
        setJobs(data)
      }
  }

  const toggleJobModal = () => {
    setModalJobVisible(!isModalJobVisible);
  };

  useEffect(() =>{
    const subscribe = navigation.addListener('focus', () => {
      loadJobs();
    });
  }, [])
  var jobListHeaderComponent = <JobListHeaderComponent/>
  return (
    <View style={{ flex: 1, display:'flex', width: '100%', height:'100%', backgroundColor:'#FAFAFA' }}>
    <LayoutWithCollapsibleHeader component={jobListHeaderComponent}>
      <View style={styles.inputJunto}>
        <SearchFilter jobs={jobs} setFilteredJobs={setFilteredJobs}/>
        <AppBar setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      </View>
      <CustomModal style={styles.modal} modalVisible={modalVisible} setModalVisible={setModalVisible} filter={filter} setFilter={setFilter} intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter} jobTypesResult={jobTypesResult} jobs={jobs}/>
      <JobList enableButton={true} jobs={jobs} filteredJobs={filteredJobs} modalJobs={intermediateFilter} navigation={navigation}/>

    </LayoutWithCollapsibleHeader>
    <TouchableOpacity style={styles.fabLocationBL} onPress={() => navigation.navigate('NewJobScreen')}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>Tarea (+)</Text>
        </View>
    </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  inputJunto:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  modal:{
    backgroundColor: '#B00B69',
    flex:'20%',
    margin:0,
    padding: 0,
    height: '100%',
    width: '20%'
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    right: 25
  },
  fab: {
    padding: 15,
    borderRadius: 100,
    marginBottom: 3,
    backgroundColor: "#51A8BB",
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',

  }
})

export default JobsScreen
