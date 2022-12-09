import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";

const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const LayoutWithCollapsibleHeader = ({ children }) => {
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
      {
        /** 
         * We put the header at the bottom of
         * our JSX or it will not take priority
         * on Android (for some reason, simply
         * setting zIndex does not work)
         **/
      }
      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: headerScrollHeight,
          width: "100%",
          overflow: "hidden",
          zIndex: 999,
          // STYLE
          padding: 0,
          backgroundColor: "#51A8BB"
        }}
        >
        <Image
          source={require('../assets/chippy_Welcome.gif')}
          style={{ flex: 1 }}
          resizeMode={"contain"}
        />
      </Animated.View>
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