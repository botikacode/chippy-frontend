import { View, Text} from 'react-native'
import React, { useEffect, useState } from 'react'

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import { getJobsUser } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'

const MyReqJobsScreen = () => {

  const [jobs, setJobs] = useState([])

  const [filteredJobs, setFilteredJobs] = useState(jobs)

  const loadJobs = async () => {
    const data = await getJobsUser(await getCurrentUser())
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