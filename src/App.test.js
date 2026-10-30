import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a card linking to each component', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: 'TicTacToe' })).toHaveAttribute('href', '/tictactoe');
});
