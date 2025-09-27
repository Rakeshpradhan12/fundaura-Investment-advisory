import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('Fundaura site', () => {
  it('renders the hero headline', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to Fundaura Investment Advisory/i)).toBeInTheDocument();
  });

  it('shows the IIM alumni initiative badge', () => {
    render(<App />);
    expect(screen.getAllByText(/An IIM Alumni Initiative/i)[0]).toBeInTheDocument();
  });

  it('has navigation links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(3);
  });

  it('contains the contact form', () => {
    render(<App />);
    expect(screen.getAllByText(/Send your query|Request a Call Back/i).length).toBeGreaterThan(0);
  });

  it('renders brand in header', () => {
    render(<App />);
    expect(screen.getAllByText(/Fundaura/i)[0]).toBeInTheDocument();
  });
});