import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native'
import { nameValidator } from '../helpers/nameValidator'
import { descriptionValidator } from '../helpers/descriptionValidator'
import SwitchSelector from "react-native-switch-selector";
import { savePet } from '../db/petsApi';
import {getCustomer} from '../db/customersApi'
import { getCurrentUser } from '../persistentData'


const AddPet = ({navigation, route}) => {
    const [petName, setPetName] = useState({ value: '', error: '' })
    const [petType, setPetType] = useState({ value: '', error: '' })
    const [petDescription, setPetDescription] = useState({ value: '', error: '' })
    const [petPhoto, setPetPhoto] = useState({ value: '', error: '' })

    const [customer, setData] = useState([])
    const loadCustomer = async () =>{
      let user = await getCurrentUser()
      if(user){
        const data = await getCustomer(user) // Insertar aquí la id del User logeado
        setData(data)
      }
    }

    const petTypeOptions = [
        { label: "Perro", value: "dog" },
        { label: "Gato", value: "cat" }
      ];

      useEffect(() =>{
        loadCustomer()
      }, [])
      

    const handleSubmit = async (newPet) => {
        try {
            if (newPet.petType != "cat"){newPet.petType = "dog";}
          await savePet(newPet);
          navigation.navigate("AccountScreen");
        } catch (error) {
          console.log(error);
        }
      };
    
    
      const onAddPressed = () => {
        const petNameError = nameValidator(petName.value)
        const petDescriptionError = descriptionValidator(petDescription.value)
        if (petNameError || petDescriptionError) {
          setPetName({ ...petName, error: petNameError })
          setPetDescription({ ...petDescription, error: petDescriptionError })
          return
        }
        const custom = {
        petName: petName.value,
        petType: petType,
        description: petDescription.value,
        image: "",
        ownerId: customer.id,
      }
      
        //alert(custom.ownerId)
        //alert(custom.petType)
        handleSubmit(custom)
        //navigation.navigate("AccountScreen")
      } 

return (
    <ScrollView>
    
      
      <View style={styles.container}>
        <Text style={styles.title} >Añadir Mascota</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#576574"
        label="Nombre"
        returnKeyType="next"
        value={petName.value}
        onChangeText={(text) => setPetName({ value: text, error: '' })}
        error={!!petName.error}
        errorText={petName.error}
      />
      {petName.error ? <Text style={styles.error}>{petName.error }</Text> : null}
     
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        placeholderTextColor="#576574"
        label="Descripción"
        returnKeyType="next"
        value={petDescription.value}
        onChangeText={(text) => setPetDescription({ value: text, error: '' })}
        error={!!petDescription.error}
        errorText={petDescription.error}
       
      />
      {petDescription.error ? <Text style={styles.error}>{petDescription.error }</Text> : null}
     
      <SwitchSelector style={styles.switch}
        options = {petTypeOptions}
        initial={0}
        onPress={value => setPetType(value)}
        //onPress = {value => alert(value)}
        buttonColor ='#0094FF'
        />
     
       
      <TouchableOpacity style={styles.buttonCeleste}  onPress={onAddPressed}>
          <Text style={styles.buttonText}>Añadir Mascota</Text>
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

export default AddPet