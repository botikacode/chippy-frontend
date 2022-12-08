import React from "react";
import { View, StatusBar, StyleSheet, SafeAreaView, ScrollView, Animated } from "react-native";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 32 }} style={styles.containerScroll}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#51A8BB" />
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerScroll: {
    borderRadius: 24,
    paddingHorizontal: 15,
  }

});

export default Layout;