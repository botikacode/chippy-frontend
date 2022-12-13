import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";

const ChatScreen = ({ route, navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Hola mundo</Text>
      <MapView style={styles.map}></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FAFAFA",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  map: {
    width: '80%',
    height: '80%',
  }
});

export default ChatScreen;
