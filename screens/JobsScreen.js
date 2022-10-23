import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import {getJobs} from '../api'

import Layout from '../components/Layout'
import JobList from '../components/JobList'

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
      <JobList jobs={jobs}/>
    </Layout>
  )
}

export default JobsScreen