import { View, Text} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import { getJobs } from '../db/jobsApi'

const MyReqJobsScreen = () => {

  const [jobs, setJobs] = useState([])

  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const loadJobs = async () => {
    const data = await getJobs()
    setJobs(data)
  }

  useEffect(() => {
    loadJobs()
  }, [])

  return (
    <Layout>
      <JobList jobs={jobs} filteredJobs={filteredJobs}/>
    </Layout>
  )
}

export default MyReqJobsScreen
