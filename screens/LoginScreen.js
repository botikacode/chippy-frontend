import React, {useEffect, useState} from 'react'
import { TouchableOpacity, StyleSheet, View, Text, TextInput, Alert} from 'react-native'

import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import {getCustomers, setActiveUser} from '../db/customersApi'

import NewLogo from '../components/NewLogo'


export default function LoginScreen({ navigation }) {


  const [customers, setCustomers] = useState([])

  const [loggedCustomer, setLoggedCustomer] = useState([])

  const loadCustomers = async () =>{

    const data = await getCustomers()
    setCustomers(data)
  }

  const loadLoggedCustomer = async (email, password) =>{

    //const data = await setActiveUser(email, password)
    const data = await setActiveUser(email, password)
    //setLoggedCustomer(data)
    if(data){
      navigation.navigate('TabNavigator')
    }else{
      alert('Datos de login incorrectos');
    }
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
          idSesion: 1,
        })
      }else{
        setEmail({ ...email, error: "" })
        setPassword({ ...password, error: "Usuario incorrecto" })
        return
      }

    })


  }
  return (
    <View style={styles.main}>
      <NewLogo style={styles.logo} />

      <View style={styles.viewToLeft}>
        <Text style={{...styles.inicioSesion, ...styles.titulo}} >Iniciar de sesión</Text>
      </View>

      <View style={styles.container}>

        <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Correo</Text>
        </View>

        <TextInput
          name="email"
          style={styles.input}
          label="email"
          returnKeyType="next"
          underlineColor="transparent"
          mode="outlined"
          placeholder="Introduce tu correo..."
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="nombre"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor="#FAFAFA"
        />

        {email.error ? <Text style={styles.error}>{email.error }</Text> : null}

        <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Contraseña</Text>
        </View>

        <TextInput
          style={styles.input}
          underlineColor="transparent"
          mode="outlined"
          placeholder="Introduce tu contraseña..."
          placeholderTextColor="#FAFAFA"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        {password.error ? <Text style={styles.error}>{password.error }</Text> : null}
      </View>

      <View style={styles.forgotPassword}>
      <TouchableOpacity>
          <Text style={styles.forgot}>¿Olvidaste la contraseña?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonCeleste} onPress={() => loadLoggedCustomer(email, password)}>
          <Text style={styles.buttonText}>INICIAR SESIÓN</Text>
      </TouchableOpacity>

      <View style={styles.row}>
      <Text style={{ color:"#51A8BB"}}>¿No tienes una cuenta? </Text>
      <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Registrarme</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    width: '100%',
    height: '100%',
    backgroundColor:'#FAFAFA',
    display:'flex',
    alignItems:'center',
    flexDirection:'column'
  },
  input: {
    width: "80%",
    marginBottom: 7,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ced4da",
    height: 30,
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#B1D8DE',
    color:'#FAFAFA'
  },
  titulo:{
    fontSize: 24,
    fontWeight: '700',
    color: '#2A6D7A',
    marginTop: 10,
    marginBottom: 5
  },
  subtitulo:{
    color: '#2A6D7A',
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "700"
  },
  viewToLeft:{
    width:'80%',
  },
  forgotPassword: {
    width: '65%',
    alignItems: 'flex-end',
    marginBottom: 24,
    fontSize: 12, 
    color: '#51A8BB',
    fontWeight:'400'
  },
  forgot: {
    color:"#51A8BB",
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
    fontWeight:'400'
  },
  buttonCeleste: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 3,
    backgroundColor: "#51A8BB",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center"
  },
  link: {
    fontWeight: 'bold',
    color: "#51A8BB",
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
  container: {
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
  },
  error: {
    fontSize: 10,
    color: '#f13a59'
  },

})
