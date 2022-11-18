import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Logo from '../components/Logo'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
import Button from 'react-native'
import { emailValidator } from '../helpers/emailValidator'
import Layout from '../components/Layout'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <Layout>
      <BackButton goBack={navigation.goBack} />
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
      </Button>
    </Layout>
  )
}
