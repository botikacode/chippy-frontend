import React from 'react'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from 'react-native'

export default function Dashboard({ navigation }) {
  return (
    <Layout>
      <Logo />
      <Header>¡Bienvenido a Chippy!</Header>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          })
        }
      >
        Iniciar Sesión
      </Button>
    </Layout>
  )
}
