import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Messaje = (props) => {
  return (
    <View style={styles.cuerpo}>
      {props.data.userId == props.currentUser.id ?
        <Text style={{...styles.msgs, ...styles.myMsgs}}>{props.data.content}</Text> :
        <Text style={{...styles.msgs,...styles.otherMsgs}}><strong>{props.currentUser.firstName}</strong>{ ': '+ props.data.content}</Text>}
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
      color:'#51A8BB',
      alignSelf:'flex-end'
    },
    otherMsgs:{
      backgroundColor:'#51A8BB',
      color:'white',
    }
});
