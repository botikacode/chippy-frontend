import React, {useEffect, useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import Logo from '../components/Logo'
import NewLogo from '../components/NewLogo'
import SwitchSelector from "react-native-switch-selector"
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import {getCustomers, saveCustomer} from '../db/customersApi'


export default function RegisterScreen({ navigation, route}) {

  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [phone, setPhone] = useState({ value: '', error: '' })
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

  function onPhoneChanged (phone) {
    // code to remove non-numeric characters from text
    let newText = '';
    let numbers = '0123456789';

    for (var i=0; i < phone.length; i++) {
        if(numbers.indexOf(phone[i]) > -1 ) {
            newText = newText + phone[i];
            setPhone(newText)
            console.log(phone)
        }else{
          alert("Solo pueden haber datos númericos en el campo de teléfono");
        }
    }
  }


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
    <View style={styles.main}>
      <NewLogo />

      <View style={styles.viewToLeft}>
        <Text style={{...styles.crearCuenta, ...styles.titulo}} >Crear nueva Cuenta</Text>
      </View>

      <View style={styles.container}>

      <SwitchSelector style={styles.switch}
        options = {userTypeSelector}
        initial={0}
        onPress={value => setUserType(value)}
        selectedColor='#FAFAFA'
        //options={[]}
        //onPress = {value => alert(value)}
        buttonColor ='#2A6D7A'
        borderColor = '#123036'
        textColor = '#2A6D7A'
        />

      <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Nombre</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Introduce tu nombre..."
        placeholderTextColor="#FAFAFA"
        label="Nombre"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      {name.error ? <Text style={styles.error}>{name.error }</Text> : null}

      <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Correo</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Introduce tu correo..."
        placeholderTextColor="#FAFAFA"
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

      <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Contraseña</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Introduce tu contraseña..."
        placeholderTextColor="#FAFAFA"
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      {password.error ? <Text style={styles.error}>{password.error }</Text> : null}

      <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Confirmar Contraseña</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Vuelve a introducir tu contraseña..."
        placeholderTextColor="#FAFAFA"
        label="Contraseña2"
        returnKeyType="done"
        //value={password.value}
        // onChangeText={(text) => setPassword({ value: text, error: '' })}
        //error={!!password.error}
        //errorText={password.error}
        secureTextEntry
      />
      {password.error ? <Text style={styles.error}>{password.error }</Text> : null}

      <View style={styles.viewToLeft}>
          <Text style={styles.subtitulo}>Teléfono</Text>
      </View>


      <TextInput

        style={styles.input}
        placeholder="Introduce tu teléfono..."
        placeholderTextColor="#FAFAFA"
        label="Teléfono"
        returnKeyType="done"
        keyboardType = {'phone-pad'}
        value={phone.value}
        onChangeText = {(phone)=> onPhoneChanged(phone)}
        //error={!!password.error}
        //errorText={password.error}
        //secureTextEntry
      />

       </View>
      <TouchableOpacity style={styles.buttonCeleste}  onPress={onSignUpPressed}>
          <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor:'#FAFAFA',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    height: '100%'
  },
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
  container: {
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
  },
  error: {
    fontSize: 12,
    color: '#f13a59',
    paddingBottom:5,
    fontWeight: '700'
  },
  viewToLeft:{
    width:'80%',
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
  switch:{
    width:'70%',
    marginBottom:10
  }
})
