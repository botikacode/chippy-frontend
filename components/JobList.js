import { View, Text, FlatList, Dimensions} from 'react-native'
import React from 'react'

import JobItem from './JobItem'

const JobList = ({jobs, filteredJobs}) => {
    
    const renderItem = ({ item }) => {
        return <JobItem job = {item}/>;
    }
    
    return (
        <FlatList
            //data={filteredJobs}
            data={filteredJobs && filteredJobs.length > 0 ? filteredJobs : jobs}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
            renderItem={renderItem}
            numColumns={2}
        />
    )
}

export default JobList