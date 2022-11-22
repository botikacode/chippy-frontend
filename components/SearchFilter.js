import { View, TextInput, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'

const SearchFilter = ({jobs, setFilteredJobs}) => {

    const [jobsInputValue, setJobsInputValue] = React.useState("")

    const handleChange = (event) => {
        const newJobsInputValue = event.target.value
        setJobsInputValue(newJobsInputValue)
        const listaFiltradaAUX = jobs.filter(job => job.title.toLowerCase().includes(newJobsInputValue.toString().toLowerCase()))
        let listaFiltrada;
        if(!listaFiltradaAUX){
            console.log('No hay lista')
            listaFiltrada = jobs;
        }else{
            listaFiltrada = listaFiltradaAUX
        }
        setFilteredJobs(listaFiltrada)
    }

    return (
        <TextInput onChange={handleChange} value={jobsInputValue}  placeholder='Buscar Tarea' style={styles.itemSearch}></TextInput>
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
        width: "90%"
    }
})

export default SearchFilter
