import React from 'react';
import renderer from 'react-test-renderer';
//import {render, screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
//import '@testing-library/jest-dom'
import LoginScreen from '../screens/LoginScreen';

test('renders correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('finds text input', async () => {
  
    // ACT
    await userEvent.click(screen.getByText('Ya tengo una cuenta'))
    await screen.findByRole('heading')
  
    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
})*/