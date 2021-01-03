import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App label={"Hello world !!!!"} />);
  const linkElement = screen.getByText("Hello world !!!!");
  expect(linkElement).toBeInTheDocument();
});
