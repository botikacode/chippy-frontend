import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './components/TabNavigator';
import UploadImageScreen from './screens/UploadImageScreen';
import MyReqJobsScreen from './screens/MyReqJobsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="UploadImageScreen" component={UploadImageScreen} options={{ title: 'Subir Imagen' }}/>
        <Stack.Screen name="MyReqJobsScreen" component={MyReqJobsScreen} options={{ title: 'Mis trabajos' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
