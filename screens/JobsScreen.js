import React, {useEffect, useState} from 'react'
import {getJobs} from '../db/jobsApi'

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'
import LayoutWithCollapsibleHeader from '../components/LayoutWithCollapsibleHeader'
import { View } from 'react-native-web'

const JobsScreen = () => {

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
    <View style={{ flex: 1 }}>
    <LayoutWithCollapsibleHeader>
      <JobList jobs={jobs} filteredJobs={filteredJobs}/>
    </LayoutWithCollapsibleHeader>
    </View>  
  )
}

//<SearchFilter jobs={jobs} setFilteredJobs={setFilteredJobs}/>
export default JobsScreen