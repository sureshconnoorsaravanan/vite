import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/navbar';
import { store } from './redux/store';
import Home from './views/home/home';
import ProductList from './views/productlist/productlist';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Provider store={store}>
      <Navbar/>
      {location.pathname !== "/" && (
        <div className="container mt-3 d-flex justify-content-end">
          <button
            className="btn btn-light"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:categoryId" element={<ProductList />} />
        </Routes>
  </Provider>
   
  );
};

export default App;
