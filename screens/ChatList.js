import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getUserMessages } from "../db/MessagesApi";
import { getCurrentUser } from "../persistentData";
import { getCustomer } from "../db/customersApi";
import { MapScreen } from "../components/MapScreen";

const ChatList = ({ navigation, route }) => {
  const [chatInputValue, setChatInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentCustomer, setCustomer] = useState([]);

  let uniqueChats = [];

  useEffect(() => {
    loadCustomer();
    loadMessages();
  }, []);

  const loadMessages = async () => {
    const data = await getUserMessages(currentCustomer);
    setMessages(data);
  };

  const loadCustomer = async () => {
    let user = await getCurrentUser();
    if (user) {
      const data = await getCustomer(user);
      setCustomer(data.id);
    }
  };

  return (
    <MapScreen/>
  );
};

const styles = StyleSheet.create({
  chatListItem: {
    color:'blue',
    fontSize: 20,
    margin: 10
  }
});

export default ChatList;
