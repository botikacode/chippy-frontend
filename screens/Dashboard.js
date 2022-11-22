import React from 'react'
import Layout from '../components/Layout'
import Logo from '../components/Logo'
import { TouchableOpacity, StyleSheet, View, Text, TextInput} from 'react-native'


export default function Dashboard({ navigation }) {
  return (
    <Layout>
      <Logo />
      <Text style={styles.welcome}>¡Bienvenido a Chippy!</Text>
      <Text style={styles.parrafo}> 
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Text>
      <TouchableOpacity style={styles.buttonBlanco} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.buttonTextCeleste}>Iniciar Sesión</Text>
      </TouchableOpacity>

      
    </Layout>
  )
}

const styles = StyleSheet.create({
  welcome:{
    color: "#0094FF",
    marginBottom: 10,
    fontSize: 20,
  },
  parrafo: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  buttonTextCeleste: {
    color: "#0094FF",
    textAlign: "center",
  },
  buttonBlanco: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "#fff",
    width: "90%",
    borderWidth: 1,
  },

})