import React from 'react'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from 'react-native'
import Paragraph from '../components/Paragraph'
import Layout from '../components/Layout'

export default function StartScreen({ navigation }) {
  return (
    <Layout>
      <Logo />
      <Header>¡Bienvenido a Chippy!</Header>
      <Paragraph>
        
      </Paragraph>
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
      </Button>
    </Layout>
  )
}
