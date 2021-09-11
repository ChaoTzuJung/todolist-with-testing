import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe("Header", () => {
    it('should only render a header element', () => {
        render(
            <Header 
            title="Todo Header"
            />
        );
        const h1Elements = screen.getAllByText(/todo/i);
        expect(h1Elements.length).toBe(1);
    });
})
