import { View, Text, FlatList, Dimensions} from 'react-native'
import React from 'react'

import JobItem from './JobItem'

const JobList = ({jobs, filteredJobs, modalJobs, navigation, enableButton}) => {

    const renderItem = ({ item }) => {
<<<<<<< HEAD
        return <JobItem job={item} navigation={navigation} enableButton={enableButton}/>;
    }

    const selectCorrectFilter = () =>{
      if(modalJobs && modalJobs.length > 0){
        return modalJobs
      }else if(filteredJobs && filteredJobs.length > 0){
        return filteredJobs
      }
      return jobs
=======
        return <JobItem job = {item}/>;
>>>>>>> diseñoLA
    }
    return (
        <FlatList
            data={selectCorrectFilter()}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
            renderItem={renderItem}
            numColumns={2}
        />
    )
}

export default JobList
