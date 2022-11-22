import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Dashboard from './screens/Dashboard';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import TabNavigator from './components/TabNavigator';
import UploadImageScreen from './screens/UploadImageScreen';
import AddPet from './screens/AddPet';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen"> 
        
        <Stack.Screen options={{headerShown: false}} name="StartScreen" component={StartScreen} />
        <Stack.Screen options={{title: " "}} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{title: " "}} name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen options={{title: " "}} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{title: " "}} name="ResetPasswordScreen" component={ResetPasswordScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="UploadImageScreen" component={UploadImageScreen} options={{ title: 'Subir Imagen' }} /> 
        <Stack.Screen options={{title: " "}} name="AddPet" component={AddPet} /> 
      </Stack.Navigator>
    </NavigationContainer>);
}

export default App;
