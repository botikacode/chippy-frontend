import React from 'react'
import NewLogo from '../components/NewLogo'
import FirstPageGif from '../components/FirstPageGif'
import Layout from '../components/Layout'

import { TextInput, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import {getCustomer} from '../db/customersApi'
import { setCurrentUser} from '../persistentData'

export default function StartScreen({ navigation }) {

  const developerMode = async () =>{
    const john = await getCustomer(1)
    const data = await setCurrentUser(john)
    navigation.navigate('TabNavigator')
  }

  return (
    <View style = {styles.mainContainer}>
        <View style={styles.header}>
          <FirstPageGif />
        </View>
        <View style={styles.main} >
          <NewLogo />
          <Text style={styles.welcome} >¡Bienvenido a Chippy!</Text>
          <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.buttonText}>Ya tengo una cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBlanco} onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={styles.buttonTextCeleste}>Registrarme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonBlanco} onPress={() => developerMode()}>
              <Text style={styles.buttonTextCeleste}>Developer Mode</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    display:'flex',
    flexDirection:'column',
    width: '100%',
    height: '100%',
    backgroundColor:'#FAFAFA',
  },
  header:{
    width: '100%',
    height: '20%',
    backgroundColor:'#FAFAFA',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  main:{
    width: '100%',
    height: '80%',
    backgroundColor:'#FAFAFA',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent: 'flex-start',
    marginTop: 40
  },
  buttonCeleste: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
    backgroundColor: "#51A8BB",
    width: "50%",
    marginTop:10
  },
  buttonBlanco: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonTextCeleste: {
    color: "#51A8BB",
    textAlign: "center",
  },
  welcome:{
    color: "#0094FF",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '700',
    color: '#2A6D7A',
    marginTop: 10,
  },

})
