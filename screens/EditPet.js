import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import { nameValidator } from '../helpers/nameValidator'
//import SwitchSelector from "react-native-switch-selector";
import { updatePet } from '../db/petsApi';
import Layout from '../components/Layout'



const EditPet = ({navigation, route}) => {
    const [petName, setPetName] = useState({ value: '', error: '' })
    const [petType, setPetType] = useState({ value: 'dog', error: '' })
    const [ownerId, setOwnerId] = useState({ value: '', error: '' })
    const [petDescription, setPetDescription] = useState({ value: '', error: '' })
    const [petPhoto, setPetPhoto] = useState({ value: '', error: '' })

    const petTypeOptions = [
        { label: "Perro", value: "dog" },
        { label: "Gato", value: "cat" }
      ];
      

    const handleSubmit = async (newPet) => {
        try {
          await updatePet(newPet);
          navigation.navigate("AccountScreen");
        } catch (error) {
          console.log(error);
        }
      };
    
    
      const onAddPressed = () => {
        const petNameError = nameValidator(petName.value)
        const petDescriptionError = description(petDescription.value)
        if (petNameError || petDescriptionError) {
          setPetName({ ...petName, error: petNameError })
          setPetDescription({ ...email, error: petDescriptionError })
          return
        }
    
        const custom = {
        petName: petName.value,
        petType: petType.value,
        description: petDescription.value,
        image: "",
        ownerId: 0,
      }
        handleSubmit(custom)
        navigation.navigate('AccountScreen')
      } 

return (
    <Layout>
      <Text style={styles.title} >Añadir Mascota</Text>
      
      <View style={styles.container}>
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
     
       </View>
      <TouchableOpacity style={styles.buttonCeleste}  onPress={onAddPressed}>
          <Text style={styles.buttonText}>Añadir Mascota</Text>
      </TouchableOpacity>
   
    </Layout>
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

})

export default EditPet