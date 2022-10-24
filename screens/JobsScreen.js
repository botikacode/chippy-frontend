import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import {getJobs} from '../db/jobsApi'

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'

const JobsScreen = () => {

  const [jobs, setJobs] = useState([])

  const loadJobs = async () =>{
    const data = await getJobs()
    setJobs(data)
  }

  useEffect(() =>{
    loadJobs()
  }, [])

  return (
    <Layout>
      <SearchFilter/>
      <JobList jobs={jobs}/>
    </Layout>
  )
}

export default JobsScreen