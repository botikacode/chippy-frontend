import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native'
import { nameValidator } from '../helpers/nameValidator'
import { descriptionValidator, cityValidator } from '../helpers/descriptionValidator'
import { priceValidator} from '../helpers/priceValidator'
import {getCustomer} from '../db/customersApi'
import { getCurrentUser } from '../persistentData'
import SelectDropdown from 'react-native-select-dropdown'
import { saveJob } from '../db/jobsApi';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddJobs = ({navigation, route}) => {
    const types = ["Tipo 1", "Tipo 2", "Tipo 3", "Tipo 4"]
    const Pets = ["Pets 1", "Pets 2", "Pets 3", "Pets 4"]
    const [jobName, setJobName] = useState({ value: '', error: '' })
    const [jobDescription, setJobDescription] = useState({ value: '', error: '' })
    const [jobPrice, setJobPrice] = useState({ value: '', error: '' })
    const [jobCity, setJobCity] = useState({ value: '', error: '' })


    const [customer, setData] = useState([])
    const loadCustomer = async () =>{
      let user = await getCurrentUser()
      if(user){
        const data = await getCustomer(user) // Insertar aquí la id del User logeado
        setData(data)
      }
    }


      useEffect(() =>{
        loadCustomer()
      }, [])
      

    const handleSubmit = async (newJob) => {
        try {
          await saveJob(newJob);
          navigation.navigate("TabNavigator");
        } catch (error) {
          console.log(error);
        }
      };
    
    
      const onAddPressed = () => {
        const jobNameError = nameValidator(jobName.value)
        const jobPriceError = priceValidator(jobPrice.value)
        const jobDescriptionError = descriptionValidator(jobDescription.value)
        const jobCityError = cityValidator(jobCity.value)
        if (jobNameError || jobDescriptionError || jobPriceError) {
          setJobName({ ...jobName, error: jobNameError })
          setJobDescription({ ...jobDescription, error: jobDescriptionError})
          setJobPrice({ ...jobPrice, error: jobPriceError})
          setJobCity({ ...jobCity, error: jobCityError})
          return
        }

        const Job = {
        title: jobName.value,
        jobType: 'Walk',       
        description: jobDescription.value,
        requesterId: customer.id,
        price: jobPrice.value,

      }
        handleSubmit(Job)
        
      } 

return (
    <ScrollView>
    
      
      <View style={styles.container}>
        <Text style={styles.title} >Añadir Tarea</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la tarea"
        placeholderTextColor="#576574"
        label="Nombre"
        returnKeyType="next"
        value={jobName.value}
        onChangeText={(text) => setJobName({ value: text, error: '' })}
        error={!!jobName.error}
        errorText={jobName.error}
      />
      {jobName.error ? <Text style={styles.error}>{jobName.error }</Text> : null}
     
      <TextInput
        style={styles.input}
        placeholder="Descripción de la tarea"
        placeholderTextColor="#576574"
        label="Descripción"
        returnKeyType="next"
        value={jobDescription.value}
        onChangeText={(text) => setJobDescription({ value: text, error: '' })}
        error={!!jobDescription.error}
        errorText={jobDescription.error}
        
      />
      {jobDescription.error ? <Text style={styles.error}>{jobDescription.error }</Text> : null}
     
      <TextInput
        style={styles.input}
        placeholder="Precio de la tarea"
        placeholderTextColor="#576574"
        label="Precio"
        keyboardType='numeric'
        returnKeyType="next"
        value={jobPrice.value}
        onChangeText={(text) => setJobPrice({ value: text, error: '' })}
        error={!!jobPrice.error}
        errorText={jobPrice.error} 
       
      />
      
      {jobPrice.error ? <Text style={styles.error}>{jobPrice.error }</Text> : null}
     
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        placeholderTextColor="#576574"
        label="City"
        returnKeyType="next"
        value={jobCity.value}
        onChangeText={(text) => setJobCity({ value: text, error: '' })}
        error={!!jobCity.error}
        errorText={jobCity.error} 
        
      />

        {jobCity.error ? <Text style={styles.error}>{jobCity.error }</Text> : null}
     

      <SelectDropdown
        data={types}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        defaultButtonText={'Selecciona el tipo de tarea'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />

<SelectDropdown
        data={Pets}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        defaultButtonText={'Selecciona la mascota'}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />

      <TouchableOpacity style={styles.buttonCeleste}  onPress={onAddPressed}>
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
},
dropdown1BtnStyle: {
  width: '70%',
  height: 30,
  backgroundColor: '#ced4da',
  marginBottom: 4,
  marginTop: 10,
  backgroundColor: '#FFFFFF',
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#ced4da',
},
dropdown1BtnTxtStyle: {color: '#000000', textAlign: 'left'},
dropdown1DropdownStyle: {backgroundColor: '#FFFFFF'},
dropdown1RowStyle: {backgroundColor: '#FFFFFF', borderBottomColor: '#FFFFFF'},
dropdown1RowTxtStyle: {color: '#000000', textAlign: 'left'},


})

export default AddJobs