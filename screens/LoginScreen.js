import React, {useEffect, useState} from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from 'react-native'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import {getCustomers} from '../db/customersApi'



export default function LoginScreen({ navigation }) {

  
  const [customers, setCustomers] = useState([])

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

  return (
    <Layout>
      <BackButton goBack={navigation.goBack} />
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
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
  },
  link: {
    fontWeight: 'bold',
  },
})
