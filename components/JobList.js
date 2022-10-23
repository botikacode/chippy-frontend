import { View, Text, FlatList} from 'react-native'
import React from 'react'

import JobItem from './JobItem'

const JobList = ({jobs}) => {
    
    const renderItem = ({ item }) => {
        return <JobItem job={item}/>;
    }
    
    return (
        <FlatList
            data={jobs}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default JobList