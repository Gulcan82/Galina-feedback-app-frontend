import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Feedback App heading', () => {
  // Rendere die App-Komponente
  render(<App />);

  // Suche das Element mit dem Text "Feedback App"
  const headingElement = screen.getByText(/feedback app/i);

  // Überprüfe, ob das Element im Dokument ist
  expect(headingElement).toBeInTheDocument();
});
