// Home.test.js
import { render, screen } from '@testing-library/react';
import Home from '../Home';

// Mock the `useTranslation` hook
jest.mock('i18next', () => ({
  t: (key: any) => key, // Return the key itself as the translation
  changeLanguage: jest.fn().mockResolvedValue("eng"),
  use: jest.fn().mockReturnValue({init:jest.fn()}),
  init: jest.fn(),
}));

describe('Home Component', () => {
  test('renders welcome note and message', () => {
    render(<Home />);

    // Verify the elements with specific translation keys are rendered
    expect(screen.getByText('welcome-note')).toBeInTheDocument();
    expect(screen.getByText('welcome-message')).toBeInTheDocument();
  });

  test('renders promotional text and list items', () => {
    render(<Home />);

    // Check promotional text headings
    expect(screen.getByText('featured-products')).toBeInTheDocument();
    expect(screen.getByText('why-choose-us')).toBeInTheDocument();

    // Check list items
    expect(screen.getByText('exclusive-deals')).toBeInTheDocument();
    expect(screen.getByText('quality-assurance')).toBeInTheDocument();
    expect(screen.getByText('fast-reliable-shipping')).toBeInTheDocument();
    expect(screen.getByText('customer-satisfaction')).toBeInTheDocument();

    // Check additional text content
    expect(screen.getByText('explore-collection')).toBeInTheDocument();
    expect(screen.getByText('start-shopping')).toBeInTheDocument();
  });
});