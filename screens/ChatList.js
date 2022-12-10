import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { getUserMessages } from "../db/MessagesApi";
import { getCurrentUser } from "../persistentData";
import { getCustomer } from "../db/customersApi";

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
      setCustomer(user.id);
    }
  };

  return (
    <View>
      <ScrollView>
        {messages.map((elem) => {
          // Obtenemos los chats no duplicados
          if (!uniqueChats.includes(elem.chatId)) {
            uniqueChats.push(elem.chatId)
            return <Text onPress={() => navigation.navigate('ChatScreen',{ chat: elem.chatId })} key={elem.id} style={styles.chatListItem}>Chat nº{elem.chatId}</Text>
          }
        }
        )}
      </ScrollView>
    </View>
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
