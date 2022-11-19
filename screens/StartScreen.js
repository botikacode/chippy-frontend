import React from 'react'
import Logo from '../components/Logo'
import Layout from '../components/Layout'

import { TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
export default function StartScreen({ navigation }) {
  return (
    <Layout>
      <Logo />
      <Text style={styles.welcome} >¡Bienvenido a Chippy!</Text>
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.buttonText}>Ya tengo una cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBlanco} onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.buttonTextCeleste}>Registrarme</Text>
      </TouchableOpacity>

      {/* 
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Ya tengo una cuenta
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrarme
      </Button> */}

    </Layout>
  )
}

const styles = StyleSheet.create({
  
  buttonCeleste: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#0094FF",
    width: "90%",
  },
  buttonBlanco: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#fff",
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  buttonTextCeleste: {
    color: "#0094FF",
    textAlign: "center",
  },
  welcome:{
    color: "#0094FF",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  
})