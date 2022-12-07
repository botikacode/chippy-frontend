import React from "react"
import renderer from "react-test-renderer"
import { render, screen, fireEvent } from "@testing-library/react-native"
// import '@testing-library/jest-dom'
import RegisterScreen from "../screens/RegisterScreen"
import StartScreen from "../screens/StartScreen"
import { Alert } from "react-native"

test("Renderiza Register Screen correctamente", () => {
  const tree = renderer.create(<RegisterScreen/>).toJSON()
  expect(tree).toMatchSnapshot()
});

test("Se registra bien como usuario", async () => {
  jest.spyOn(Alert, "alert")

  render(<RegisterScreen/>)

  const name = screen.getByPlaceholderText("Nombre")
  const email = screen.getByPlaceholderText("Email")
  const password = screen.getByPlaceholderText("Contraseña")

  fireEvent.changeText(name, "Pepe")
  fireEvent.changeText(email, "pepeusuario@gmail.com")
  fireEvent.changeText(password, "12345678")

  expect(name.props.value).toBe("Pepe")
  expect(email.props.value).toBe("pepeusuario@gmail.com")
  expect(password.props.value).toBe("12345678")

  // Hace click en Aceptar
  fireEvent.press(screen.getByText("Aceptar"))

  expect(Alert.alert)
});
  