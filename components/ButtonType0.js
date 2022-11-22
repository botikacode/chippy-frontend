import React from "react";
import { View, StyleSheet } from "react-native";

const Button = ({ children }) => {
  return (
    <View style={styles.button}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        bottom: 20,                                                    
        right: 20, 
        position: 'absolute',
        zIndex: 100,
        width: 100,
        height:40,
        borderWidth: 1,
        backgroundColor: '#2471A3',
        borderColor: '#2471A3',
        borderRadius: 10,
        textAlign:"center",
        padding:5
    }
});

export default Button;