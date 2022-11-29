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
        const data = await getJobsNotUser(user)
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

  return (
    <Layout>
      <SearchFilter jobs={jobs} setFilteredJobs={setFilteredJobs}/>
      <JobList jobs={jobs} filteredJobs={filteredJobs} modalJobs={intermediateFilter} navigation={navigation}/>
      <AppBar setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} filter={filter} setFilter={setFilter} intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter} jobTypesResult={jobTypesResult} jobs={jobs}/>
      <TouchableOpacity style={styles.fabLocationBL} onPress={() => navigation.navigate('NewJobScreen')}>
          <View style={styles.fab}>
            <TouchableOpacity onPress={() => navigation.navigate("AddJobs")}>
              <Text style={styles.fabText}>Tarea (+)</Text>
            </TouchableOpacity>
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
    backgroundColor: '#ff6019',
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

export default JobsScreen
