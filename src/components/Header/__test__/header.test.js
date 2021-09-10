import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', () => {
    render(
        <Header 
          title="Todo Header"
        />
    );
    const headingElement = screen.getByRole("heading", { name: /todo header/i });
    expect(headingElement).toBeInTheDocument();
});

it('should only render a header element', () => {
    render(
        <Header 
          title="Todo Header"
        />
    );
    const h1Elements = screen.getAllByText(/todo/i);
    expect(h1Elements.length).toBe(1);
});