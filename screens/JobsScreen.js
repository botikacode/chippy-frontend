import React, {useEffect, useState} from 'react'
import {getJobs} from '../db/jobsApi'

import Layout from '../components/Layout'
import JobList from '../components/JobList'
import SearchFilter from '../components/SearchFilter'
import AppBar from '../components/AppBar'
import CustomModal from '../components/Modal'
import {initialFilter} from '../data/initialFilter'

const JobsScreen = () => {

  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState(jobs)
  const [filter, setFilter] = useState(initialFilter);
  const [intermediateFilter, setIntermediateFilter] = useState(initialFilter)
  const [modalVisible, setModalVisible] = useState(false);
  const jobTypesResult = jobs.map(item => item.jobType).filter((value, index, self) => self.indexOf(value) === index)

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
      <JobList jobs={jobs} filteredJobs={filteredJobs} modalJobs={intermediateFilter}/>
      <AppBar setModalVisible={setModalVisible} modalVisible={modalVisible}/>
      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} filter={filter} setFilter={setFilter} intermediateFilter={intermediateFilter} setIntermediateFilter={setIntermediateFilter} jobTypesResult={jobTypesResult} jobs={jobs}/>
    </Layout>
  )
}

export default JobsScreen
