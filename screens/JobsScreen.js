import React, {useEffect, useState} from 'react'
import {getJobs} from '../db/jobsApi'
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'

const JobsScreen = ({ navigation, route }) => {
  
  const [jobs, setJobs] = useState([])


  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const loadJobs = async () =>{
    const data = await getJobs()
    setJobs(data)
  }

  useEffect(() =>{
    loadJobs()
  }, [])

  return (
    <Layout>
      <SearchFilter jobs={jobs} setFilteredJobs={setFilteredJobs}/>
      <JobList jobs={jobs} filteredJobs={filteredJobs}/>
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