import { View, Text, FlatList} from 'react-native'
import React from 'react'

import JobItem from './JobItem'

const JobList = ({jobs, filteredJobs}) => {
    
    const renderItem = ({ item }) => {
        return <JobItem job={item}/>;
    }
    
    return (
        <FlatList
            data={filteredJobs}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default JobList