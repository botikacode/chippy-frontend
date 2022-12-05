import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { createElement } from 'react-native-web';
import SnowFlakeIcon from 'react-native-vector-icons/FontAwesome'

const SnowFlakes = ({relleno1, relleno2, relleno3, visibility}) => {
const[visible, setVisible] = useState(false)

  useEffect(() =>{
  }, [])


  return(
    <View visible={visibility} style={styles.viewContainer}>
      <SnowFlakeIcon name="snowflake-o" style={ relleno1 ? styles.FilledSnowFlake : styles.EmptySnowFlake}/>
      <SnowFlakeIcon name="snowflake-o" style={ relleno2 ? styles.FilledSnowFlake : styles.EmptySnowFlake}/>
      <SnowFlakeIcon name="snowflake-o" style={ relleno3 ? styles.FilledSnowFlake : styles.EmptySnowFlake}/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    alignSelf: "center",
    flexDirection:"row",
  },
  EmptySnowFlake: {
    paddingTop: 30,
    flex: 1,
    fontSize: "64px",
    color: "grey"
  },
  FilledSnowFlake: {
    paddingTop: 30,
    flex: 1,
    fontSize: "64px",
    color: "black"
  }
});

export default SnowFlakes
