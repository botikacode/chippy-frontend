import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight } from 'react-native'
import React from 'react'


const AccountScreen = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
  <View>
    <View style = {styles.imageNameContainer}>
    <TouchableHighlight onPress={() => alert('Pressed!')}>
      <Image source={require('../assets/accountImage.jpg')} style = {styles.itemImage}/>
    </TouchableHighlight>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>

    <View style={styles.dogPortrait}>
      <View style={styles.line}/>
      <View style={{padding: 100}}/>
      <View style={styles.line}/>
    </View>

    <View style={styles.commentContainer}>
      <Text style={styles.commentTextTitle}>Comentarios recientes: </Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
imageNameContainer: {
  display: 'flex',
  flexDirection: "row",
  marginVertical: 2,
  marginHorizontal:2,
  padding:10,
  borderRadius: 6,
},
itemLeftContainer:{
  flex: 1,
},
line: {
  borderWidth: 0.1,
  borderColor:'black',
  margin:10
},
dogPortrait: {
  padding: 20
},
itemImage:{
  width: 120,
  height:120,
  borderRadius:100,
},
input: {
  borderRadius: 10,
  MarginRight: 100,
  height: 40,
  margin: 40,
  borderWidth: 1,
  flex: 1,
  padding: 10,
},
dogContainer: {
  display: 'flex',
  flexDirection: "row",
  marginVertical: 30,
  marginHorizontal:2,
  padding:150,
  borderRadius: 6,
},
commentContainer: {

},
commentTextTitle: {
  fontSize: 20,
  padding: 30
}
});

export default AccountScreen

