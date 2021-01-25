import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Water is wet', () => {
  render(<App />);
});

test('Dropdown is functional and renders correct season', async () => {
  render(<App />);

  // Testing dropdown existence
  const dropdown = await screen.findByText(/select a season/i);
  userEvent.click(dropdown);
  // Dropdown drops down...
  const seasonOne = await screen.findByText(/season 1/i);
  expect(seasonOne).toBeInTheDocument();
  // Select a season renders episodes
  userEvent.click(seasonOne);
  const episodeOne = await screen.findByText(/episode 1/i);
  expect(episodeOne).toBeInTheDocument();
});
