import React, {useEffect, useState} from 'react'
import { View } from 'react-native'
import {getJobs} from '../db/jobsApi'

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'

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
    <Layout>
      <SearchFilter jobs={jobs} setFilteredJobs={setFilteredJobs}/>
      <JobList jobs={jobs} filteredJobs={filteredJobs}/>
    </Layout>
  )
}

export default JobsScreen