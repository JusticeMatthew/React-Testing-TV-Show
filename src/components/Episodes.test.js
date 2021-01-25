import React from 'react';
import { render, screen } from '@testing-library/react';
import Episodes from './Episodes';

const testSeasonOne = [
  {
    id: 1,
    name: 'Season One Tester',
    season: 1,
    number: 7,
    runtime: 60,
  },
];
const testSeasonTwo = [
  {
    id: 2,
    name: 'Season Two Tester',
    season: 2,
    number: 4,
    runtime: 60,
  },
];

test('Water is wet', async () => {
  render(<Episodes episodes={[]} />);
});

test('Episodes update properly when season is changed', () => {
  // Testing mock season 1 render
  const { rerender } = render(<Episodes episodes={testSeasonOne} />);
  const testTitleOne = screen.getByText('Season One Tester', {
    exact: true,
  });
  expect(testTitleOne).toBeInTheDocument();

  // Testing rerender to season 2
  rerender(<Episodes episodes={testSeasonTwo} />);
  const testTitleTwo = screen.getByText('Season Two Tester', {
    exact: true,
  });

  // Two assertions to ensure correctness
  expect(testTitleOne).not.toBeInTheDocument();
  expect(testTitleTwo).toBeInTheDocument();
});
