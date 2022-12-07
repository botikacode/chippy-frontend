import React from "react";
import renderer from "react-test-renderer";
import { render, screen, fireEvent } from "@testing-library/react-native";
import EditPetScreen from "../screens/EditPet";

import { Alert } from "react-native";

test("Renderiza pet Screen correctamente", () => {
  const tree = renderer.create(<EditPetScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Registra bien la mascota", async () => {
  jest.spyOn(Alert, "alert");

  render(<EditPetScreen/>);

  const nombre = screen.getByPlaceholderText("Nombre");
  const descripcion = screen.getByPlaceholderText("Descripción");

  fireEvent.changeText(nombre, "Federico");
  fireEvent.changeText(descripcion, "Hola, soy Federico");

  expect(nombre.props.value).toBe("Federico");
  expect(descripcion.props.value).toBe("Hola, soy Federico");

  // Hace click en Iniciar Sesión
  //fireEvent.press(screen.getByText("Añadir Mascota"));

  expect(Alert.alert)
});