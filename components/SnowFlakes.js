import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { createElement } from 'react-native-web';
import SnowFlakeIcon from 'react-native-vector-icons/FontAwesome'

const SnowFlakes = ({relleno1, relleno2, relleno3, visibility}) => {
  useEffect(() =>{
  }, [])


  return(
    <div style={visibility ? styles.visibleDiv : styles.hiddenDiv}>
      <SnowFlakeIcon visible={false} name="snowflake-o" style={ relleno1 ? styles.FilledSnowFlake : styles.EmptySnowFlake}/>
      <SnowFlakeIcon name="snowflake-o" style={ relleno2 ? styles.FilledSnowFlake : styles.EmptySnowFlake}/>
      <SnowFlakeIcon name="snowflake-o" style={ relleno3 ? styles.FilledSnowFlake : styles.EmptySnowFlake}/>
    </div>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    alignSelf: "center",
    flexDirection:"row",
  },
  visibleDiv: {
    visibility: "visible",
    paddingTop: 30
  },
  hiddenDiv: {
  visibility: "hidden",
  paddingTop: 30,
},
  EmptySnowFlake: {
    flex: 1,
    fontSize: "40px",
    color: "grey"
  },
  FilledSnowFlake: {
    flex: 1,
    fontSize: "40px",
    color: "black"
  }
});

export default SnowFlakes
