import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert } from 'react-native'
import { nameValidator } from '../helpers/nameValidator'
import { descriptionValidator } from '../helpers/descriptionValidator'
import SwitchSelector from "react-native-switch-selector";
import { savePet } from '../db/petsApi';
import {getCustomer} from '../db/customersApi'
import { getCurrentUser } from '../persistentData'
import FirstPageGif from '../components/FirstPageGif'
import LayoutWithCollapsibleHeader from '../components/LayoutWithCollapsibleHeader'



const AddPet = ({navigation, route}) => {
    const [petName, setPetName] = useState({ value: '', error: '' })
    const [petType, setPetType] = useState({ value: '', error: '' })
    const [petDescription, setPetDescription] = useState({ value: '', error: '' })
    const [petPhoto, setPetPhoto] = useState({ value: '', error: '' })

    const [customer, setData] = useState([])
    const loadCustomer = async () =>{
      let user = await getCurrentUser()
      if(user){
        setData(user)
      }
    }
    const catImg = require('../assets/icono_gat.png')
    const dogImg = require('../assets/icono_gos.png')
    const maleImg = require('../assets/machoIcono.png')
    const femaleImg = require('../assets/hembraIcono.png')
    const petTypeOptions = [
        { label: "     Perro", value: "Perro", imageIcon: dogImg },
        { label: "     Gato", value: "Gato", imageIcon: catImg }
      ];
    const petGenderOptions = [
        { label: "     Macho", value: "Macho", imageIcon: maleImg},
        { label: "     Hembra", value: "Hembra", imageIcon: femaleImg}
  ];

      useEffect(() =>{
        loadCustomer()
      }, [])


    const handleSubmit = async (newPet) => {
        try {
            if (newPet.petType != "Gato"){newPet.petType = "Perro";}
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
    <View>
      <View style={{ flex: 1, display:'flex', width: '100%', height:'100%', backgroundColor:'#FAFAFA' }}>
    <LayoutWithCollapsibleHeader/>
    </View>
      <View style={styles.container}>
        <Text style={styles.title} >Nueva Mascota</Text>
      {petDescription.error ? <Text style={styles.error}>{petDescription.error }</Text> : null}

      <Text style={{marginLeft: 60}}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de tu mascota"
        placeholderTextColor="#576574"
        label="Nombre"
        returnKeyType="next"
        value={petName.value}
        onChangeText={(text) => setPetName({ value: text, error: '' })}
        error={!!petName.error}
        errorText={petName.error}
      />

      <SwitchSelector style={styles.switch}
        options = {petTypeOptions}
        initial={0}
        onPress={value => setPetType(value)}
        //onPress = {value => alert(value)}
        buttonColor ='#51A8BB'
        hasPadding
        />
        
        
        <SwitchSelector style={styles.switch}
        options = {petGenderOptions}
        initial={0}
        //onPress={value => setPetType(value)}
        //onPress = {value => alert(value)}
        buttonColor ='#51A8BB'
        hasPadding
        />
      <Text style={{marginLeft: 60}}>Edad</Text>
        <TextInput 
        style={styles.input}
        placeholder = 'Edad de tu mascota'
        keyboardType='numeric'
        />
      {petName.error ? <Text style={styles.error}>{petName.error }</Text> : null}
      <Text style={{marginLeft: 60}}>Descripción</Text>
      <TextInput
        style={styles.descripcionInput}
        placeholder="¿Cómo es tu mascota? Cuéntanos un poco mas"
        placeholderTextColor="#576574"
        label="Descripción"
        returnKeyType="next"
        value={petDescription.value}
        onChangeText={(text) => setPetDescription({ value: text, error: '' })}
        error={!!petDescription.error}
        errorText={petDescription.error}

      />

      <TouchableOpacity style={styles.buttonCeleste}  onPress={onAddPressed}>
          <Text style={styles.buttonText}>Añadir</Text>
      </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cabecera: {
    alignContent: 'center',
    backgroundColor:'#51A8BB',
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    paddingBottom: 20,
    width:'100%',
  },
  header:{
    width: '100%',
    height: '50%',
    backgroundColor:'#FAFAFA',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    color: "#51A8BB",
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
    alignSelf: 'center',
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
    borderRadius: 5,
    alignSelf: 'center',
  },
  descripcionInput: {
    width: "70%",
    marginBottom: 4,
    marginTop: 10,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ced4da",
    height: 'baseline',
    minHeight: 60,
    maxHeight: 350,
    color: "#000000",
    padding: 4,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonCeleste: {
    alignContent: 'center',
    marginTop: 10,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#51A8BB",
    width: "25%",
    alignSelf: 'center',
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  container: {
    width: '100%',
    marginVertical: 5,
    
  },
  error: {
    fontSize: 10,
    color: '#f13a59',
    paddingBottom:5,
  },
  switch: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingTop: 10,
}

})

export default AddPet
