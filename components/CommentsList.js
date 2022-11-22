import { View, Text, FlatList} from 'react-native'
import React from 'react'

import Comment from './Comment'

const CommentsList = ({comments}) => {

    const renderItem = ({ item }) => {
        return <Comment com={item}/>;
    }

    return (
        <FlatList
            //data={filteredJobs}
            data={comments}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default CommentsList
