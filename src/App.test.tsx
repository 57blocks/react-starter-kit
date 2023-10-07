import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders 57blocks React Starter Kit', () => {
  render(<App />);
  const linkElement = screen.getByText(/57blocks React Starter Kit/i);
  expect(linkElement).toBeInTheDocument();
});
