import { render, screen } from '@testing-library/react';
import Nav_Top from './Navbar/Nav_Top';

test('renders learn react link', () => {
    render(< Nav_Top />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});