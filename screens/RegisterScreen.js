import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import Logo from '../components/Logo'
import Layout from '../components/Layout'
import SwitchSelector from "react-native-switch-selector"
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import {getCustomers, saveCustomer} from '../db/customersApi'


export default function RegisterScreen({ navigation, route}) {

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [userType, setUserType] = useState(false)

  const userTypeSelector = [
      { label: "Personal", value: false },
      { label: "Organización", value: true }
    ];

  const handleSubmit = async (customer) => {
    try {
      await saveCustomer(customer);
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
    isShelter: userType,
  }

    handleSubmit(custom)
    navigation.navigate('Dashboard')
  }

  return (
    <Layout>
      <Logo />
      <Text style={styles.crearCuenta} >Crear Cuenta</Text>

      <View style={styles.container}>

      <SwitchSelector style={styles.switch}
        options = {userTypeSelector}
        initial={0}
        onPress={value => setUserType(value)}
        options={[
          style: {

          }
        ]}
        //onPress = {value => alert(value)}
        buttonColor ='#0094FF'
        />

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#576574"
        label="Nombre"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      {name.error ? <Text style={styles.error}>{name.error }</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#576574"
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
      {email.error ? <Text style={styles.error}>{email.error }</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#576574"
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      {password.error ? <Text style={styles.error}>{password.error }</Text> : null}

       </View>
      <TouchableOpacity style={styles.buttonCeleste}  onPress={onSignUpPressed}>
          <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>

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
