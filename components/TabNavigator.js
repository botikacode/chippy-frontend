import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapsScreen from '../screens/MapsScreen';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import JobsScreen from '../screens/JobsScreen';
import ChatList from '../screens/ChatList';
import AccountScreen from '../screens/AccountScreen';


function TabNavigator({navigation,route}) {

  const Tab = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    tabBarActiveTintColor: '#2471A3',
    tabBarInactiveTintColor: '#2471A3',
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "JobsScreen") {
        iconName = focused ? 'home' : 'home-outline';

      
      }/* else if (route.name === "MapsScreen") {
      iconName = focused ? 'map' : 'map-outline';
      }   */   
      else if (route.name === "ChatList") {
        iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';

      } else if (route.name === "AccountScreen") {
        iconName = focused ? 'person-circle' : 'person-circle-outline';
      } 

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })
  
  return(
    <Tab.Navigator initialRouteName={"JobsScreen"} screenOptions={screenOptions}>
        <Tab.Screen name="ChatList" component={ChatList} />
        {/* <Tab.Screen name="MapsScreen" component={MapsScreen} /> */}
        <Tab.Screen name="JobsScreen" initialParams={{ idSesion: 1 }}  /* initialParams={{ idSesion: route.params.idSesion }}  */component={JobsScreen} />
        <Tab.Screen name="AccountScreen" initialParams={{ idSesion: 1 }} component={AccountScreen} /> 
    </Tab.Navigator>
  );
}
export default TabNavigator
