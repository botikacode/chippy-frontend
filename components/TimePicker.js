import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { createElement } from 'react-native-web';

const TimePicker = ({value, onChange, style}) => {


  useEffect(() =>{
  }, [])


  return createElement('input', {
    type: 'time',
    value: value,
    onInput: onChange,
    style: style
  }
)
}

export default TimePicker
