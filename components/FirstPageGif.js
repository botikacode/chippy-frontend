import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function FirstPageGif() {
  return <Image source={require('../assets/homeGif.gif')} style={styles.gif} />
}

const styles = StyleSheet.create({
  gif: {
    height: '90%',
    width:'90%',
    borderRadius: 15
  },
})
