import { View, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const buscar = (text) => {
    console.log(text)
}

const SearchFilter = () => {
    const [text, setText] = React.useState("");
    
    return (
        <TextInput onChangeText={newText => setText(newText)} onChange={buscar(text)} value={text}  placeholder='Buscar Tarea' style={styles.itemSearch}></TextInput>
    )
}

const styles = StyleSheet.create({
    itemSearch:{
        height: 40,
        padding: 10,
        marginHorizontal: 2,
        marginVertical: 2,
        borderWidth: 1,
        borderColor: '#2471A3',
        borderRadius: 10,
    }
})

export default SearchFilter