import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Case 1', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("Hello World");
});

test('Test Case 2', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello World");
});

test('Test Case 3', () => {
  render(<App />);
  const linkElement = screen.getByTestId("List");
  expect(linkElement).toHaveTextContent("Apple");
})
 