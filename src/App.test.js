import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('red-blue button', () => {
  test('button has correct initial color', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i });
    expect(button).toHaveStyle('background-color:red')
  });

  test('button has correct initial text', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i });
    expect(button).toHaveTextContent('color is blue')
  });

  test('button turns blue when clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i });
    fireEvent.click(button)
    expect(button).toHaveStyle('background-color:blue')
  });

  test('button text changed when clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /blue/i });
    fireEvent.click(button)
    expect(button).toHaveTextContent('color is red blue')
  });
})