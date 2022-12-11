import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text, StyleSheet, SafeAreaView, StatusBar, TextInput } from "react-native";
import {H_MIN_HEIGHT, H_MAX_HEIGHT, H_SCROLL_DISTANCE} from "../data/HeaderData"

const NewJobHeaderComponent = ({setJobTitle}) => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  return (
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
        <Text
          style={styles.title}
          resizeMode={"contain"}
          >Nueva Tarea</Text>

        <TextInput
            style={styles.input}
            placeholder="Titulo"
            placeholderTextColor="#FAFAFA"
            label="Titulo"
            returnKeyType="next"
            onBlur={(text) => setJobTitle(text)}
        />

      </Animated.View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    position: 'absolute',
    width: 177,
    height: 33,
    left: 24,
    top: 60,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 33,
    /* identical to box height */

    display: 'flex',
    alignItems: 'center',

    color: '#FAFAFA'
  },
  input: {
    width: "70%",
    position: 'absolute',
    left: 24,
    top: 90,
    fontSize: 14,
    textColor: "#FAFAFA",
    borderWidth: 1,
    borderColor: "#ced4da",
    height: 30,
    color:"#FAFAFA",
    border: 'none'
  },
  containerScroll: {
    borderRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
  }

});

export default NewJobHeaderComponent
