import { View, Text, StyleSheet, Button, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { Messaje } from "../components/Messaje";
import { InputText } from "primereact/inputtext";
import {getMessages} from '../db/MessagesApi'

const fullWidth = Dimensions.get("window").width;

// Cambiar
const currentUser = 1;

const ChatScreen = () => {

  const [chatInputValue, setChatInputValue] = useState("");
  const [messages, setMessages] = useState([])

  useEffect(() =>{
    loadMessages()
  }, [])

  const loadMessages = async () =>{
    const data = await getMessages()
    setMessages(data)
  }

  const handleChange = (event) => {
    const chatInputValue = event.target.value;
    setChatInputValue(chatInputValue);
  };

  const handleKeyDown = (e) => {
    if(e.nativeEvent.key == "Enter"){
      clickEnviar();
    }
  }

  const clickEnviar = () => {
    let newMsg = {
      id: messages.length + 1,
      content: chatInputValue,
      userId: currentUser,
      date: new Date().toLocaleString(),
    };
    setMessages(messages => [...messages, newMsg]);
    setChatInputValue("");
  };

  return (
    <View style={styles.height}>
      <View style={styles.flex}>
        {messages.map((elem) => (
          <Messaje data={elem} key={elem.id} currentUser={currentUser}></Messaje>
        ))}
      </View>
      <View style={styles.viewInput}>
        <InputText
          style={styles.input}
          value={chatInputValue}
          onChange={handleChange}
          onKeyPress={handleKeyDown}
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
