import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import JobsScreen from './screens/JobsScreen';
import ChatScreen from './screens/ChatScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"JobsScreen"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "JobsScreen") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "ChatScreen") {
              iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';

            } else if (rn === "AccountScreen") {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 }
        }}>

        <Tab.Screen name="ChatScreen" component={ChatScreen} />
        <Tab.Screen name="JobsScreen" component={JobsScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;