import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import Logo from '../components/Logo'
import Layout from '../components/Layout'
// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
// import { nameValidator } from '../helpers/nameValidator'
import {getCustomers, saveCustomer} from '../db/customersApi'


export default function RegisterScreen({ navigation, route}) {

  /* const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  
  

  const handleSubmit = async (asd) => {
    try {
      await saveCustomer(asd);
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error);
    }
  };


  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    const custom = {
    lastName: "",
    firstName: name.value,
    address: "",
    city: "",
    image: "",
    description: "",
    phone: "",
    email: email.value,
    password: password.value,
    web: "",
    isShelter: false,
  }
    
    console.log(custom)
    handleSubmit(custom)
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  } */

  return (
    <Layout>
      <Logo />
      <Text style={styles.crearCuenta} >Crear Cuenta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#576574"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#576574"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#576574"
      />
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
      
      {/* <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Crear cuenta</Header>
      <TextInput
        label="Nombre"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Aceptar
      </Button>
      <View style={styles.row}>
        <Text>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View> */}
    </Layout>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
  crearCuenta:{
    color: "#0094FF",
    marginBottom: 10,
    fontSize: 20,
  },
  input: {
    width: "70%",
    marginBottom: 7,
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
})
