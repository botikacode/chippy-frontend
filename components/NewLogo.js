import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function NewLogo() {
  return <Image source={require('../assets/newLogoAzulRes.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 100,
    marginBottom: 20,
    marginTop: 10
  },
})
