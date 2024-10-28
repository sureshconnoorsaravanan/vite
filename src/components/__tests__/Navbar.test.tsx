import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('i18next', () => ({
  t: (key : any) => key, // Return the key itself as the translation
  changeLanguage: jest.fn().mockResolvedValue("eng"),
  use: jest.fn().mockReturnValue({init:jest.fn()}),
  init: jest.fn(),
}));

describe('Navbar Component', () => {
  const mockNavigate = jest.fn();

  let wrapper: any
  beforeEach(() => {
    // Set up mock for useNavigate
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    const { asFragment } = render(<Navbar />);

    wrapper = asFragment
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mock data between tests
  });

  // Snapshot test
  test('matches the snapshot', () => {
    expect(wrapper()).toMatchSnapshot();
  });

  it('shouild trigger onClick btn to navigate',()=>{
    fireEvent.click(screen.getByLabelText('Go to Home Page'))
  })

  it('shouild trigger onKeyDown btn on scroll',()=>{
    const requiredElement = screen.getByLabelText('Go to Home Page')
    fireEvent.keyDown(requiredElement, { key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13 })
  })
});