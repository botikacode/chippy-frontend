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
itemImage:{
  width: 250,
  height: 250,
}
});

export default UploadImageScreen
