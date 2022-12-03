import React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react-native'
// import userEvent from '@testing-library/user-event'
// import '@testing-library/jest-dom'
import LoginScreen from '../screens/LoginScreen';
import StartScreen from '../screens/StartScreen';

test('renders Login Screen correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders Start Screen correctly', () => {
  const tree = renderer.create(<StartScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('finds text input', async () => {
    // ARRANGE
    render(<StartScreen />)
  
    // ACT
    // await userEvent.click(screen.getByText('Ya tengo una cuenta'))
    //await screen.findByRole('heading')
  
    // ASSERT
    //expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    //expect(screen.getByRole('button')).toBeDisabled()
})