import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders 57blocks React Starter Kit', () => {
  render(<Home />);
  const linkElement = screen.getByText(/57blocks React Starter Kit/i);
  expect(linkElement).toBeInTheDocument();
});
