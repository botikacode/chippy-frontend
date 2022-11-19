import React, { useState } from 'react'
import Logo from '../components/Logo'
//import { emailValidator } from '../helpers/emailValidator'
import Layout from '../components/Layout'
import { TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function ResetPasswordScreen({ navigation }) {
  /* const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  } */

  return (
    <Layout>
      <Logo />
      <Text style={styles.restaurar} >Restaurar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#576574"
      />
      <View style={styles.row}>
      <Text style={styles.parrafo} >Recibirá un correo electrónico con un enlace para restablecer la contraseña.</Text>
      </View>
      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.buttonText}>Ya tengo una cuenta</Text>
      </TouchableOpacity>
      

      {/* <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Restaurar Password</Header>
      <TextInput
        label="E-mail "
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="Recibirá un correo electrónico con un enlace para restablecer la contraseña."
      />
      <Button
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 16 }}
      >
        Enviar Enlace
      </Button> */}
    </Layout>
  )
}

const styles = StyleSheet.create({
  
  restaurar:{
    color: "#0094FF",
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  parrafo: {
    fontSize: 10,
    color: "#000",
  },
  input: {
    width: "50%",
    marginBottom: 5,
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
    paddingBottom: 10,
    borderRadius: 5,
    marginTop: 60,
    backgroundColor: "#0094FF",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
})