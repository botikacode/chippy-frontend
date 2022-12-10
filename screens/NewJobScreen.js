import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import SwitchSelector from "react-native-switch-selector";

import JobsScreen from './JobsScreen'
import Layout from '../components/Layout'
import DatePicker from '../components/DatePicker'
import TimePicker from '../components/TimePicker'
import SnowFlakes from '../components/SnowFlakes'
import SelectionButtons from '../components/SelectionButtons'
import LayoutWithCollapsibleHeader from '../components/LayoutWithCollapsibleHeader'

import { saveJob } from '../db/jobsApi'
import { getCurrentUser } from '../persistentData'
import { getCustomer } from '../db/customersApi'


//NO SE ESCRIBEN LAS QUE ESTAN EN Cuidar
//SI NO PONGO NADA EN EL PRICE ME DICE QUE RELLENE TODOSS CAMPOS
const NewJobScreen = ({navigation}) => {
    const [jobTitle, setJobTitle] = useState()
    const [jobType, setJobType] = useState()
    const [jobPrice, setJobPrice] = useState(0)
    const [jobDescription, setJobDescription] = useState()
    const [customer, setData] = useState()

    const [visibleSnowFlakes, setSnowFlakesVisibility] = useState(false)
    const [rellenoSnowFlake1, setRellenoSnowFlake1] = useState()
    const [rellenoSnowFlake2, setRellenoSnowFlake2] = useState()
    const [rellenoSnowFlake3, setRellenoSnowFlake3] = useState()

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [startHour, setStartHour] = useState()
    const [endHour, setEndHour] = useState()

    const [remunerationType, setRemunerationType] = useState("paid")

    const snowFlakeIcon = require("../assets/snowFlake_icon.png")
    const coinIcon = require("../assets/coin.png")

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

    const onChanged = (text) => {
        let newText = '';
        let numbers = '0123456789';

        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];

            }
            else {
                alert("please enter numbers only");
            }
        }
        setJobPrice(newText);
    }

    const paymentType = [
        { value: "paid", imageIcon: coinIcon},
        { value: "snowFlake", imageIcon: snowFlakeIcon}
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
      if(!jobTitle || !jobType || !jobDescription || !startDate || !startHour || !endDate || !endHour){
        console.log(jobTitle); console.log(jobDescription);console.log(startDate); console.log(startHour); console.log(endDate); console.log(endHour)
        alert('Quedan campos sin rellenar')
       }
      else{
        let counter = 0;
        let snowFlakesArray = [rellenoSnowFlake1, rellenoSnowFlake2, rellenoSnowFlake3]
        snowFlakesArray.forEach(value => {if(value) counter++})
        const custom = {
            title: jobTitle.target.value,
            jobType: jobType,
            price: jobPrice,
            description: jobDescription.target.value,
            requesterId: customer.id,
            startDate: startDate + " " + startHour,
            endDate: endDate + " " + endHour,
            snowFlakes: counter
        }
        handleSubmit(custom)

      }
    }
    const updateSnowFlakes = (value, comesFrom, remuneration) => {
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
      if(res < 0) alert('Fechas incorrectas')
      if(remunerationType == "snowFlake" && res > 0){
        fillSnowFlakes(res/3600000)
      }else{
        setRellenoSnowFlake1(false); setRellenoSnowFlake2(false); setRellenoSnowFlake3(false)
      }


    }
    const setUpData = (value) => {
      if((value == "snowFlake" && !visibleSnowFlakes) || (value == "paid" && visibleSnowFlakes)){
        setRemunerationType(value)
        setJobPrice(0)
        setSnowFlakesVisibility(!visibleSnowFlakes)
        if(value == "snowFlake" && endDate && endHour && startDate && startHour){
          let endDateTime = new Date(endDate + " " + endHour)
          let startDateTime = new Date(startDate + " " + startHour)
          let res = endDateTime.getTime() - startDateTime.getTime()
          if(res>0){
            fillSnowFlakes(res/3600000)
          }else {
            setRellenoSnowFlake1(false); setRellenoSnowFlake2(false); setRellenoSnowFlake3(false)
          }
        }
      }
    }

    const fillSnowFlakes = (hours) => {
      if(hours < 24*7){setRellenoSnowFlake1(true); setRellenoSnowFlake2(false); setRellenoSnowFlake3(false)}
      if(hours >= 24*7 && hours < 24*14) {setRellenoSnowFlake1(true); setRellenoSnowFlake2(true); setRellenoSnowFlake3(false)}
      if(hours >= 24*14){setRellenoSnowFlake1(true); setRellenoSnowFlake2(true); setRellenoSnowFlake3(true)}
    }

    return (
        <ScrollView>
          <LayoutWithCollapsibleHeader title="Nueva Tarea" setJobTitle={setJobTitle}>
            
            <Text
              style={{paddingBottom: 10}}
              defaultValue="Fecha inicio">Inicio</Text>

            <View style={{flexDirection:"row"}}>
              <DatePicker
              onChange={(value) => { updateSnowFlakes(value,"startDate")} }
              style={{flex:1}}
              />
              <TimePicker onChange={(value,e) => {updateSnowFlakes(value,"startHour")} }style={{flex:1}}/>
            </View>

            <Text
              style={{paddingBottom: 10, paddingTop: 10}}
              defaultValue="Fecha fin">Fin</Text>
              <View View style={{flexDirection:"row"}}>
                <DatePicker onChange={(value,e) => {updateSnowFlakes(value,"endDate")} }style={{flex:1}}/>
                <TimePicker onChange={value => {updateSnowFlakes(value, "endHour")} } style={{flex:1}}/>
              </View>

              <Text style={{paddingTop: 10}}>Descripción</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Descripción"
                  placeholderTextColor="#576574"
                  label="Descripción"
                  returnKeyType="next"
                  onBlur={(text) => setJobDescription(text)}
              />

              <Text style={{paddingTop: 10}}>Modo de remuneración</Text>
              <View style={styles.viewContainer}>
                <SwitchSelector
                    style={styles.switch}
                    options={paymentType}
                    initial={0}
                    onPress={value =>{setUpData(value)}}
                    buttonColor='#0094FF'
                />

                {visibleSnowFlakes && <SnowFlakes visibility={true} relleno1={rellenoSnowFlake1} relleno2={rellenoSnowFlake2} relleno3={rellenoSnowFlake3}/>}

                <div style={{visibility: !visibleSnowFlakes ? "visible" : "hidden", marginTop: 20}}>
                <Text>Precio  </Text>
                  <TextInput
                      style={styles.input}
                      keyboardType = 'numeric'
                      placeholder="Precio"
                      placeholderTextColor="#576574"
                      value={jobPrice}
                      onChangeText={text => onChanged(text)}
                      label="Precio"
                      editable={!visibleSnowFlakes ? true : false}
                      returnKeyType="next"
                  />
               </div>

              </View>

              <Text style={{marginTop: 30}}>Categoría</Text>
              <View style={{alignSelf: "center"}}>
                <SelectionButtons setType={setJobType} name1="Pasear" name2="Cuidar"/>
              </View>

              <TouchableOpacity style={styles.buttonCeleste} onPress={onAddPressed}>
                  <Text style={styles.buttonText}>Aceptar</Text>
              </TouchableOpacity>
          </LayoutWithCollapsibleHeader>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection:"row",
    gap: "50px",
    paddingLeft: 20
  },
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
    inputPrice: {
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
      hiddenInput: "true"
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
      alignSelf: "center",
      borderRadius: 30
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
      width: '40%',
      paddingTop: 30,
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
