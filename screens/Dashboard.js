import React from 'react'
import Layout from '../components/Layout'
import NewLogo from '../components/NewLogo'
import { TouchableOpacity, StyleSheet, View, Text, TextInput} from 'react-native'


export default function Dashboard({ navigation }) {
  return (
    <Layout style={styles.main}>
      <NewLogo />
      <Text style={styles.welcome}>¡Bienvenido a Chippy!</Text>
      <Text style={styles.parrafo}> 
       Se ha creado tu cuenta. <strong> Inicia sesión </strong> para verificar que se ha creado correctamente.
      </Text>
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      
    </Layout>
  )
}

const styles = StyleSheet.create({
  main:{
    width: '100%',
    backgroundColor:'#FAFAFA'
  },
  welcome:{
    color: "#2A6D7A",
    marginBottom: 10,
    fontSize: 20,
  },
  parrafo: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
    color:'#51A8BB'
  },
  buttonCeleste: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 3,
    backgroundColor: "#51A8BB",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },

})