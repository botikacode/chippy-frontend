import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Messaje } from "../components/Messaje";
import { InputText } from "primereact/inputtext";
import { getChatMessages, saveMessage } from "../db/MessagesApi";
import { getCurrentUser } from "../persistentData";
import { getCustomer } from "../db/customersApi";

const fullWidth = Dimensions.get("window").width;

const ChatScreen = ({ route, navigation }) => {
  const [chatInputValue, setChatInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentCustomer, setCustomer] = useState([]);

  const { chat } = route.params;

  useEffect(() => {
    loadMessages();
    loadCustomer();
  }, []);

  useEffect(() => {
    // Obtener los mensajes cada 5s
    const interval = setInterval(() => {
      console.log('Cargando mensajes...');
      loadMessages();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadMessages = async () => {
    const data = await getChatMessages(chat);
    setMessages(data);
  };

  const handleChange = (event) => {
    const chatInputValue = event.target.value;
    setChatInputValue(chatInputValue);
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.key == "Enter") {
      clickEnviar();
    }
  };

  const clickEnviar = () => {
    let newMsg = {
      content: chatInputValue,
      userId: currentCustomer.id,
      mDate: new Date().toLocaleString(),
      chatId: chat
    };
    setMessages((messages) => [...messages, newMsg]);
    saveMessage(newMsg);
    setChatInputValue("");
  };

  const loadCustomer = async () => {
    let user = await getCurrentUser();
    if (user) {
      const data = await getCustomer(user);
      setCustomer(data);
    }
  };

  return (
    <View style={styles.height}>
      <View style={styles.flex}>
        <ScrollView>
          {messages.map((elem) => (
            <Messaje
              data={elem}
              key={elem.id}
              currentUser={currentCustomer}
            ></Messaje>
          ))}
        </ScrollView>
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
