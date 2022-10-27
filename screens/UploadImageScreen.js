import { View, Text, Button , Image, StyleSheet} from 'react-native'
import React from 'react'

const UploadImageScreen = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/accountImage.jpg')} style = {styles.itemImage}></Image>
      </View>
      <View style={styles.button}>
        <Button
        onPress={onPressLearnMore}
        title="Upload Image"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
imageContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10
},
button:{
  width: '100%',
  height: '40%',
  justifyContent: 'center',
  alignItems: 'center'
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
  width: 250,
  height: 250,
},
input: {
  fontSize: 25,
  borderRadius: 10,
  MarginRight: 100,
  height: 40,
  margin: 30,
  flex: 1,
  padding: 10,
}
});

export default UploadImageScreen
