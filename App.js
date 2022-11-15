import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigator from './components/TabNavigator';
import UploadImageScreen from './screens/UploadImageScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="UploadImageScreen" component={UploadImageScreen} options={{ title: 'Subir Imagen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
