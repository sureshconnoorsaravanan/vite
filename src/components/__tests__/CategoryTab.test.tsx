import {
    render,
    screen,
    fireEvent,
    RenderResult
  } from "@testing-library/react";
  import { Provider } from "react-redux";
  import { BrowserRouter, useNavigate } from "react-router-dom";
  import configureMockStore from "redux-mock-store";
  import { TFunction } from 'i18next';
  import CategoryTab from "../CategoryTab";
  
  // Mocking the fetchCategories action
  jest.mock("../../redux/slices/products/productSlice", () => ({
    fetchCategories: jest.fn(),
  }));
  
  jest.mock('i18next', () => ({
    t: ((key: Parameters<TFunction>[0]) => key) as TFunction, // Type-safe t function
    changeLanguage: jest.fn().mockResolvedValue("eng"),
    use: jest.fn().mockReturnValue({init:jest.fn()}),
    init: jest.fn(),
  }));
  
  
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  // Mocking the fetchCategories action
  jest.mock("../../redux/hooks", () => ({
    useAppDispatch: () => {
      return jest.fn();
    },
    useAppSelector: () => {
      return { categories: categories };
    },
  }));
  
  // Mocking useNavigate from react-router-dom
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
  }));
  
  const mockNavigate = jest.fn();
  
  describe("CategoryTab Component", () => {
    const mockStore = configureMockStore();
    let store: ReturnType<typeof mockStore>;
  
    let wrapper: RenderResult['asFragment'];
    beforeEach(() => {
      store = mockStore();
      (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
      const { asFragment } = render(
        <Provider store={store}>
          <BrowserRouter>
            <CategoryTab />
          </BrowserRouter>
        </Provider>
      );
      wrapper = asFragment;
    });
  
    test("renders CategoryTab and matches snapshot", () => {
      expect(wrapper()).toMatchSnapshot();
    });
  
    test("navigates to the correct category when a button is clicked", () => {
      const electronicsButton = screen.getByText("electronics");
      fireEvent.click(electronicsButton);
  
      // Ensure that the navigate function is called with the correct category path
      expect(mockNavigate).toHaveBeenCalledWith("list/electronics");
    });
  });