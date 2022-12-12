import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Image, TouchableHighlight } from "react-native";
import { getUserMessages } from "../db/MessagesApi";
import { getCurrentUser } from "../persistentData";
import { getCustomer } from "../db/customersApi";

const ChatList = ({ navigation, route }) => {
  const [chatInputValue, setChatInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [currentCustomer, setCustomer] = useState([]);

  let uniqueChats = [];
  let participantsOfChat = [];

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
    <View style={styles.main}>
      <View style={styles.alignRight}>
        <Image source={require('../assets/estrellita2.png')} style = {styles.estrellita}/>
      </View>
      <View style={styles.alignLeft}>
        <Text style={styles.titulo}>Tu lista de chats</Text>
      </View>
      <ScrollView style={styles.chatList}>
        {messages.map((elem) => {
          // Obtenemos los chats no duplicados
          if (!uniqueChats.includes(elem.chatId)) {
            uniqueChats.push(elem.chatId)
            //return <Text onPress={() => navigation.navigate('ChatScreen',{ chat: elem.chatId })} key={elem.id} style={styles.chatListItem}>Chat nº{elem.chatId}</Text>
              return  <TouchableHighlight onPress={() => navigation.navigate('ChatScreen',{ chat: elem.chatId })} key={elem.id}>
                        <View style={styles.chatItem}>
                          <View style={styles.chatItemImage}>
                            <Image source={require('../assets/profilePhoto.png')} style = {styles.perfilPhoto}/>
                          </View>
                          <View style={styles.chatItemContent}>
                            <Text style={styles.chatListItem}>Chat con Usuario({elem.chatId})</Text>
                            <Text style={styles.chatListItemSub}>{elem.content}</Text>
                          </View>
                          <View style={styles.chatItemPuntos}>
                            <Text style={styles.puntitos}>...</Text>
                          </View>
                        </View>
                      </TouchableHighlight>
          }
        }
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    display:"flex",
    flexDirection:"column",
    width:"100%",
    height:"100%",
    backgroundColor: '#FAFAFA'
  },
  chatListItem: {
    color:'#51A8BB',
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    marginRight:10,
    display:"flex",
    alignItems:"center"
  },
  chatListItemSub:{
    color:'#B1D8DE',
    fontSize: 15,
    marginLeft: 10,
  },
  alignRight: {
    paddingTop:'5%',
    alignSelf:"flex-end",
    height: '10%',
    paddingRight: 10
  },
  alignLeft: {
    alignSelf:"flex-start",
    height: '15%',
  },
  titulo:{
    fontWeigh: "700",
    fontSize: 24,
    color: '#2A6D7A',
    marginTop: 10,
    marginLeft: 10,
    paddingLeft: 20
  },
  chatList:{
    height: '80%'
  },
  estrellita:{
    width: 40,
    height:40,
    borderRadius:100,
  },
  chatItem:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  chatItemImage:{
    flex: '20%',
    display: "flex",
    justifyContent:"center"
  },
  perfilPhoto:{
    width: 60,
    height:60,
    borderRadius:100,
  },
  chatItemContent:{
    flex: '50%'
  },
  chatItemPuntos:{
    flex: '20%',
    alignSelf:"flex-start"
  },
  puntitos:{
    paddingLeft: 10,
    fontSize: 24,
    color: '#51A8BB'
  }
});

export default ChatList;
