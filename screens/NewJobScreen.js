import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import SwitchSelector from "react-native-switch-selector";

import JobsScreen from './JobsScreen'
import Layout from '../components/Layout'
import DatePicker from '../components/DatePicker'
import TimePicker from '../components/TimePicker'
import SnowFlakes from '../components/SnowFlakes'

import { saveJob } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'
import { getCustomer } from '../db/customersApi'

const NewJobScreen = ({navigation}) => {
    const [jobTitle, setJobTitle] = useState()
    const [jobType, setJobType] = useState()
    const [jobPrice, setJobPrice] = useState()
    const [jobDescription, setJobDescription] = useState()
    const [customer, setData] = useState()

    const [visibleSnowFlakes, setSnowFlakesVisibility] = useState(true)
    const [rellenoSnowFlake1, setRellenoSnowFlake1] = useState()
    const [rellenoSnowFlake2, setRellenoSnowFlake2] = useState()
    const [rellenoSnowFlake3, setRellenoSnowFlake3] = useState()

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [startHour, setStartHour] = useState()
    const [endHour, setEndHour] = useState()

    const inputRef = useRef(null)

    const loadCustomer = async () => {
        let user = await getCurrentUser()
        if (user) {
            const data = await getCustomer(user) // Insertar aquí la id del User logeado
            setData(data)
        }
    }
    const changeDatePickerVisibility = () =>{
      setDatePickerVisibility(!datePickerVisible)
    }
    useEffect(() =>{
      loadCustomer()
    }, [startDate])



    const jobTypeOptions = [
        { label: "Pasear", value: "walk" },
        { label: "Cuidar", value: "keep" }
    ];

    const paymentType = [
        { label: "Remunerado", value: "paid" },
        { label: "Copos de Nieve", value: "snowFlake" }
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

    const updateSnowFlakes = (value, comesFrom) => {
      let res;
      let endDateTime;
      let startDateTime
      if(comesFrom == "startDate"){
        setStartDate(value.target.value)
        if(endDate && endHour && startHour){
          endDateTime = new Date(endDate + " " + endHour)
          startDateTime = new Date(value.target.value + " " + startHour)
          res = endDateTime.getTime() - startDateTime.getTime()

        }
      }else if(comesFrom == "startHour"){
        setStartHour(value.target.value);
        if(endDate && endHour && endHour){
          endDateTime = new Date(endDate + " " + endHour)
          startDateTime = new Date(startDate + " " + value.target.value)
          res = endDateTime.getTime() - startDateTime.getTime()
        }

      }else if(comesFrom == "endDate"){
        setEndDate(value.target.value);
        if(startDate && endHour && startHour){
          endDateTime = new Date(value.target.value + " " + endHour)
          startDateTime = new Date(startDate + " " + startHour)
          res = endDateTime.getTime() - startDateTime.getTime()
        }

      }else if(comesFrom == "endHour"){
        setEndHour(value.target.value);
        if(endDate && startDate && startHour){
          endDateTime = new Date(endDate + " " + value.target.value)
          startDateTime = new Date(startDate + " " + startHour)
          res = endDateTime.getTime() - startDateTime.getTime()
        }
      }
      if(res > 0){
        fillSnowFlakes(res/3600000)
      }else{
        setRellenoSnowFlake1(false); setRellenoSnowFlake2(false); setRellenoSnowFlake3(false)
      }

    }

    const fillSnowFlakes = (hours) => {
      if(hours < 24){setRellenoSnowFlake1(true); setRellenoSnowFlake2(false); setRellenoSnowFlake3(false)}
      if(hours >= 24 && hours < 48) {setRellenoSnowFlake1(true); setRellenoSnowFlake2(true); setRellenoSnowFlake3(false)}
      if(hours >= 48){setRellenoSnowFlake1(true); setRellenoSnowFlake2(true); setRellenoSnowFlake3(true)}
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
                <SwitchSelector style={styles.switch}
                    options={paymentType}
                    initial={0}
                    onChange={() => setSnowFlakesVisibility(false)}
                    //onPress = {value => alert(value)}
                    buttonColor='#0094FF'
                />
                <TouchableOpacity style={styles.buttonCeleste} onPress={onAddPressed}>
                    <Text style={styles.buttonText}>Añadir Tarea</Text>
                </TouchableOpacity>

                <Text
                  style={styles.input}
                  defaultValue="Fecha inicio">Inicio de la tarea</Text>
                <View style={{flexDirection:"row"}}>
                  <DatePicker
                  onChange={(value,e) => { updateSnowFlakes(value,"startDate")} }
                  style={{flex:1}}
                  />
                  <TimePicker onChange={(value,e) => {updateSnowFlakes(value,"startHour")} }style={{flex:1}}/>
                </View>
                <Text
                  style={styles.input}
                  defaultValue="Fecha fin">Fin de la tarea</Text>
                  <View View style={{flexDirection:"row"}}>
                    <DatePicker onChange={(value,e) => {updateSnowFlakes(value,"endDate")} }style={{flex:1}}/>
                    <TimePicker onChange={value => {updateSnowFlakes(value, "endHour")} } style={{flex:1}}/>
                  </View>

            </View>
            <SnowFlakes visibility={visibleSnowFlakes} relleno1={rellenoSnowFlake1} relleno2={rellenoSnowFlake2} relleno3={rellenoSnowFlake3}/>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
  dateStyle: {
    alignSelf: "flex-start"
  },
  timeStyle: {
    alignSelf: "flex-end"
  },
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
  },
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },

  })

  export default NewJobScreen
