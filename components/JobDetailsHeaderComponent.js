import React, { useRef } from "react";
import { View, Animated, Image, ScrollView, Text, StyleSheet, SafeAreaView, StatusBar, TextInput } from "react-native";
import {H_MIN_HEIGHT, H_MAX_HEIGHT, H_SCROLL_DISTANCE} from "../data/HeaderData"

const JobDetailsHeaderComponent = ({children, title, type, startDate, endDate}) => {
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
        <View>
          <Text
            style={styles.title}
            resizeMode={"contain"}
            >{title}</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.textType}>{type}</Text>
            <Text style={styles.textDate}>{startDate}  {endDate}</Text>
          </View>

       </View>

      </Animated.View>
      </SafeAreaView>
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
    fontSize: 40,
    lineHeight: 33,
    display: 'flex',
    alignItems: 'center',
    color: '#FAFAFA',
    justifyContent: 'center'
  },
  textTitle: {
    width: "280px",
    height: "48px",
    top: "188px",
    left: "48px",
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "24px",
    color: "#FAFAFA"
  },
  textType: {
    position: 'absolute',
    width: 177,
    height: 33,
    left: 24,
    top: 150,
    marginRight: 10,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "22px",
    color: "#FAFAFA"
  },
  textDate: {
    position: 'absolute',
    width: 177,
    height: 33,
    left: 100,
    top: 150,
    fontFamily: 'Nunito',
    fontWeight: 700,
    fontSize: 18,
    lineHeight: "22px",
    color: "#FAFAFA"
  },
  containerScroll: {
    borderRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 20,
  }

});

export default JobDetailsHeaderComponent
