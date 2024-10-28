import { render } from '@testing-library/react';
import Footer from '../Footer';

jest.mock('i18next', () => ({
  t: (key : any) => key, // Return the key itself as the translation
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