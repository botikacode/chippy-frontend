import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Dashboard from "./screens/Dashboard";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";
import TabNavigator from "./components/TabNavigator";
import UploadImageScreen from "./screens/UploadImageScreen";
import AddPet from "./screens/AddPet";
import MyReqJobsScreen from "./screens/MyReqJobsScreen";
import ChatScreen from "./screens/ChatScreen";
import ListPetsScreen from "./screens/ListPetsScreen";
import JobDetailsScreen from "./screens/JobDetailsScreen";
import NewJobScreen from "./screens/NewJobScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen
          options={{ title: " " }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ title: " " }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{ title: " " }}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{ title: " " }}
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UploadImageScreen"
          component={UploadImageScreen}
          options={{ title: "Subir Imagen" }}
        />
        <Stack.Screen
          options={{ title: " " }}
          name="AddPet"
          component={AddPet}
        />
        <Stack.Screen
          name="MyReqJobsScreen"
          component={MyReqJobsScreen}
          options={{ title: "Mis trabajos" }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerStyle: {
              backgroundColor: "#51A8BB",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="ListPetsScreen"
          component={ListPetsScreen}
          options={{ title: "Mis mascotas" }}
        />
        <Stack.Screen
          name="JobDetailsScreen"
          component={JobDetailsScreen}
          options={{ title: "Detalle de la tarea" }}
        />
        <Stack.Screen
          name="NewJobScreen"
          component={NewJobScreen}
          options={{ title: "Detalle de la tarea" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
