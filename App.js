import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import JobsScreen from './screens/JobsScreen';
import ChatScreen from './screens/ChatScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
  tabBarActiveTintColor: '#2471A3',
  tabBarInactiveTintColor: '#2471A3',
  headerShown: false,
  tabBarShowLabel: false,
  tabBarAccessibilityLabel: 'false',
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === "JobsScreen") {
      iconName = focused ? 'home' : 'home-outline';

    } else if (route.name === "ChatScreen") {
      iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';

    } else if (route.name === "AccountScreen") {
      iconName = focused ? 'person-circle' : 'person-circle-outline';
    }
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"JobsScreen"} screenOptions={screenOptions}>
        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="JobsScreen" component={JobsScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;