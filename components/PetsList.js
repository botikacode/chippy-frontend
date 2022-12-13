import { View, Text, FlatList} from 'react-native'
import React from 'react'

import PetItem from './PetItem'

const PetsList = ({pets, navigation}) => {

    const renderItem = ({ item }) => {
        return <PetItem pet={item} navigation={navigation}/>;
    }

    return (
        <FlatList
            data={pets}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
            renderItem={renderItem}
            numColumns={2}
        />
    )
}

export default PetsList
