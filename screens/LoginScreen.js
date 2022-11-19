import React, {useEffect, useState} from 'react'
import { TouchableOpacity, StyleSheet, View, Text, TextInput} from 'react-native'

// import { emailValidator } from '../helpers/emailValidator'
// import { passwordValidator } from '../helpers/passwordValidator'
// import {getCustomers} from '../db/customersApi'

import Layout from '../components/Layout'
import Logo from '../components/Logo'


export default function LoginScreen({ navigation }) {

  
  /* const [customers, setCustomers] = useState([])

  const loadCustomers = async () =>{

    const data = await getCustomers()
    setCustomers(data)
  }

  useEffect(() =>{
    loadCustomers()
  }, [])

  
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })


  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      console.log(emailError)
      console.log(passwordError)
      
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    
    customers.map((custom) => {
      if(custom.email === email.value && custom.password === password.value){
        navigation.navigate('TabNavigator', {
          idSesion: custom.id,
        })
      }else{
        setEmail({ ...email, error: "Usuario incorrecto" })
        setPassword({ ...password, error: "Usuario incorrecto" })
        return
      }
      
    })

    
  }
 */
  return (
    <Layout>
      <Logo />
      
      <Text style={styles.inicioSesion} >Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#576574"
      />

      <Text style={{ color: "#0094FF"}} ></Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#576574"
      />

      <View style={styles.forgotPassword}>
      <TouchableOpacity>
          <Text style={styles.forgot}>Olvidaste la contraseña?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonCeleste} onPress={() => navigation.navigate("TabNavigator")}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.row}>
      <Text style={{ color:"#0094FF"}}>No tienes una cuenta? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Registrarme</Text>
        </TouchableOpacity>
      </View>

      {/* <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Inicio de sesión</Header>
      <TextInput
        label="email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="nombre"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Olvidaste la contraseña?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Iniciar sesión
      </Button>
      <View style={styles.row}>
        <Text>No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Registrarme</Text>
        </TouchableOpacity>
      </View> */}
    </Layout>
  )
}

const styles = StyleSheet.create({
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
  forgotPassword: {
    width: '65%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    color:"#1234DF",
    fontSize: 11,
  },
  buttonCeleste: {
    paddingTop: 10,
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
  link: {
    fontWeight: 'bold',
    color: "#0094FF",
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  inicioSesion:{
    color: "#0094FF",
    marginBottom: 10,
    fontSize: 20,
  },

})
