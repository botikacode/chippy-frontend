import { View, Text, FlatList} from 'react-native'
import React from 'react'

import JobItem from './JobItem'

const JobList = ({jobs, filteredJobs, modalJobs, navigation, enableButton}) => {

    const renderItem = ({ item }) => {
        return <JobItem job={item} navigation={navigation} enableButton={enableButton}/>;
    }

    const selectCorrectFilter = () =>{
      if(modalJobs && modalJobs.length > 0){
        return modalJobs
      }else if(filteredJobs && filteredJobs.length > 0){
        return filteredJobs
      }
      return jobs
    }
    return (
        <FlatList
            data={selectCorrectFilter()}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default JobList
