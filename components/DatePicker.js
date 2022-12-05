import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { createElement } from 'react-native-web';

const DatePicker = ({value, onChange, style}) => {


  useEffect(() =>{
  }, [])


  return createElement('input', {
    type: 'date',
    value: value,
    onInput: onChange,
    style: style
  }
)
}

const styles = StyleSheet.create({
  itemFooter:{
    marginTop: 20,
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center'
  }
});

export default DatePicker
