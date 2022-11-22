import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import React, { useState } from "react";
import { Messaje } from "../components/Messaje";
import { InputText } from "primereact/inputtext";

const fullWidth = Dimensions.get("window").width;

// Cambiar
const currentUser = 'Manolo';
let contadorID = 5;

const msgs = [
  {
    id: 1,
    text: "Hola",
    user: "Antonio",
    date: "16/01/2022",
  },
  {
    id: 2,
    text: "Buenos días",
    user: "Antonio",
    date: "16/01/2022",
  },
  {
    id: 3,
    text: "Estoy interesado en tu anuncio",
    user: "Antonio",
    date: "16/01/2022",
  },
  {
    id: 4,
    text: "Buenos días Antonio",
    user: currentUser,
    date: new Date().toLocaleString(),
  },
];

const ChatScreen = () => {
  const [chatInputValue, setChatInputValue] = useState("");

  const handleChange = (event) => {
    const chatInputValue = event.target.value;
    setChatInputValue(chatInputValue);
  };

  const clickEnviar = () => {
    let newMsg = {
      id: contadorID,
      text: chatInputValue,
      user: currentUser,
      date: new Date().toLocaleString(),
    };
    contadorID = contadorID + 1;
    msgs.push(newMsg);
    setChatInputValue("");
  };//

  return (
    <View style={styles.height}>
      <View style={styles.flex}>
        {msgs.map((elem) => (
          <Messaje data={elem} key={elem.id} currentUser={currentUser}></Messaje>
        ))}
      </View>
      <View style={styles.viewInput}>
        <InputText
          style={styles.input}
          value={chatInputValue}
          onChange={handleChange}
        ></InputText>
        <Button
          style={styles.enviar}
          color="rgb(36, 113, 163)"
          title="Enviar"
          onPress={clickEnviar}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  height: {
    height: "100%",
  },
  flex: {
    flex: 1,
  },
  viewInput: {
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: fullWidth,
  },
  input: {
    width: fullWidth - fullWidth / 5,
  },
  enviar: {
    width: fullWidth / 5,
    borderRadius: 5,
  },
});

export default ChatScreen;
