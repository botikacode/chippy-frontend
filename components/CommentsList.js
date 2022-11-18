import { View, Text, FlatList} from 'react-native'
import React from 'react'

import Comment from './Comment'

const CommentsList = ({comments, filteredComments}) => {

    const renderItem = ({ item }) => {
        return <Comment com={item}/>;
    }

    return (
        <FlatList
            //data={filteredJobs}
            data={filteredComments && filteredComments.length > 0 ? filteredComments : comments}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default CommentsList
