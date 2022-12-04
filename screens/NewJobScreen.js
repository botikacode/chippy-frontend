import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import SwitchSelector from "react-native-switch-selector";

import JobsScreen from './JobsScreen'
import Layout from '../components/Layout'
import { saveJob } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'
import { getCustomer } from '../db/customersApi'

const NewJobScreen = ({navigation}) => {
    const [jobTitle, setJobTitle] = useState()
    const [jobType, setJobType] = useState()
    const [jobPrice, setJobPrice] = useState()
    const [jobDescription, setJobDescription] = useState()
    const [customer, setData] = useState()

    const inputRef = useRef(null)

    const loadCustomer = async () => {
        let user = await getCurrentUser()
        if (user) {
            const data = await getCustomer(user) // Insertar aquí la id del User logeado
            setData(data)
        }
    }
    useEffect(() =>{
      loadCustomer()
    }, [])

    const jobTypeOptions = [
        { label: "Pasear", value: "walk" },
        { label: "Cuidar", value: "keep" }
    ];

    const handleSubmit = async (newJob) => {
        try {
          await saveJob(newJob);
          navigation.navigate("JobsScreen");
        } catch (error) {
          console.log(error);
        }
    };

    const onAddPressed = () => {
        const custom = {
            title: jobTitle,
            jobType: jobType,
            price: jobPrice,
            description: jobDescription,
            requesterId: customer.id,
        }

        //alert(custom.ownerId)
        //alert(custom.petType)
        handleSubmit(custom)
        //navigation.navigate("AccountScreen")
    }


    return (
        <ScrollView>


            <View style={styles.container}>
                <Text style={styles.title} >Añadir Tarea</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Titulo"
                    placeholderTextColor="#576574"
                    label="Titulo"
                    returnKeyType="next"
                    value={jobTitle}
                    onChangeText={(text) => setJobTitle(text)}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Descripción"
                    placeholderTextColor="#576574"
                    label="Descripción"
                    returnKeyType="next"
                    value={jobDescription}
                    onChangeText={(text) => setJobDescription(text)}

                />

                <TextInput
                    style={styles.input}
                    placeholder="Precio"
                    placeholderTextColor="#576574"
                    label="Precio"
                    returnKeyType="next"
                    value={jobPrice}
                    onChangeText={(text) => setJobPrice(text)}
                />

                <SwitchSelector style={styles.switch}
                    options={jobTypeOptions}
                    initial={0}
                    onPress={value => setJobType(value)}
                    //onPress = {value => alert(value)}
                    buttonColor='#0094FF'
                />


                <TouchableOpacity style={styles.buttonCeleste} onPress={onAddPressed}>
                    <Text style={styles.buttonText}>Añadir Tarea</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    title:{
      color: "#0094FF",
      marginBottom: 10,
      fontSize: 20,
      alignText: 'center',
    },
    input: {
      width: "70%",
      marginBottom: 4,
      marginTop: 10,
      fontSize: 14,
      borderWidth: 1,
      borderColor: "#ced4da",
      height: 30,
      color: "#000000",
      padding: 4,
      borderRadius: 5,
    },
    buttonCeleste: {
      paddingTop: 10,
      marginTop: 24,
      paddingBottom: 10,
      borderRadius: 5,
      marginBottom: 3,
      marginLeft: 10,
      backgroundColor: "#0094FF",
      width: "50%",
    },
    buttonText: {
      color: "#fff",
      textAlign: "center",
    },
    container: {
      width: '100%',
      marginVertical: 5,
      alignItems: 'center',
    },
    error: {
      fontSize: 10,
      color: '#f13a59',
      paddingBottom:5,
    },
    switch: {
      flexDirection: 'row',
      alignItems: 'center',
      textColor: '#0094FF',
      selectedColor: '#FFFFFF',
      width: '80%',
      paddingTop: 10,
  }

  })

  export default NewJobScreen
