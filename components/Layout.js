import React from "react";
import { View, StatusBar, StyleSheet } from "react-native";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00FFFF" />
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    backgroundColor: "#D8D8D8",
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "#D8D8D8",
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
});

export default Layout;