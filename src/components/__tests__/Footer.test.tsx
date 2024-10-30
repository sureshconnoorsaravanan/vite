import { render } from '@testing-library/react';
import { TFunction } from 'i18next';
import Footer from '../Footer';

jest.mock('i18next', () => ({
  t: ((key: Parameters<TFunction>[0]) => key) as TFunction, // Type-safe t function
  changeLanguage: jest.fn().mockResolvedValue("eng"),
  use: jest.fn().mockReturnValue({init:jest.fn()}),
  init: jest.fn(),
}));

describe('Footer Component', () => {
  // Snapshot test
  test('matches the snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});