import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Messaje = (props) => {
  return (
    <View style={styles.cuerpo}>
      {props.data.userId == props.currentUser ?
        <Text style={{...styles.msgs, ...styles.myMsgs}}>{props.data.content}</Text> :
        <Text style={{...styles.msgs,...styles.otherMsgs}}><strong>{props.data.userId}</strong>{ ': '+ props.data.content}</Text>}
    </View>
  )}

  const styles = StyleSheet.create({
    cuerpo:{
      padding:10,
      display:'flex',
      flexDirection:'column'
    }, 
    msgs:{
      padding:10,
      borderRadius:5,
      width:'fit-content'
    },
    myMsgs:{
      backgroundColor:'white',
      color:'rgb(36, 113, 163)', 
      alignSelf:'flex-end'
    },
    otherMsgs:{
      backgroundColor:'rgb(36, 113, 163)',
      color:'white',
    }
});
