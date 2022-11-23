import { View, Text, FlatList} from 'react-native'
import React from 'react'

import Pet from './Pet'

const PetsList = ({pets}) => {

    const renderItem = ({ item }) => {
        return <Pet pet={item}/>;
    }

    return (
        <FlatList
            data={pets}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

export default PetsList
