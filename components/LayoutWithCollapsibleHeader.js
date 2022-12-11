import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text, StyleSheet, SafeAreaView, StatusBar, TextInput } from "react-native";
import {H_MIN_HEIGHT, H_MAX_HEIGHT, H_SCROLL_DISTANCE} from "../data/HeaderData"

const LayoutWithCollapsibleHeader = ({ children, setJobTitle, component}) => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
          ])}
        scrollEventThrottle={16}
        style={styles.containerScroll}
      >
        <View style={{ paddingTop: H_MAX_HEIGHT }}>
          {/** Page contant goes here **/}
          <View style={styles.container}>
            <StatusBar backgroundColor="#51A8BB" />
            {children}
          </View>
        </View>
      </ScrollView>

    {component}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    borderRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
  }

});

export default LayoutWithCollapsibleHeader;
