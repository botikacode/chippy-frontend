import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import MapView from "react-native-maps";

const MapsScreen = ({ route, navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Mapa (No funcional en web)</Text>
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
    justifyContent: "center",
  },
  map: {
    width: '100%',
    height: '80%',
    marginTop: 20
  }
});

export default MapsScreen;
