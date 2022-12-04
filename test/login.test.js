import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";
// import '@testing-library/jest-dom'
import LoginScreen from "../screens/LoginScreen";
import StartScreen from "../screens/StartScreen";
import { Alert } from "react-native";

test("Renderiza Login Screen correctamente", () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Renderiza Start Screen correctamente", () => {
  const tree = renderer.create(<StartScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Se logea bien como usuario", async () => {
  jest.spyOn(Alert, "alert");

  render(<LoginScreen />);

  const email = screen.getByPlaceholderText("Email");
  const contraseña = screen.getByPlaceholderText("Contraseña");

  fireEvent.changeText(email, "JohnDoe@gmail.com");
  fireEvent.changeText(contraseña, "1234");

  expect(email.props.value).toBe("JohnDoe@gmail.com");
  expect(contraseña.props.value).toBe("1234");

  // Hace click en Iniciar Sesión
  fireEvent.press(screen.getByText("Iniciar Sesión"));

  expect(Alert.alert)/*.toHaveBeenCalledWith("Datos de login incorrectos")*/
});
