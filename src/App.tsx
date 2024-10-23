import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import { store } from './redux/store';
import Home from './views/Home.tsx';
import ProductList from './views/ProductList.tsx';
import CategoryTab from './components/CategoryTab.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Provider store={store}>
      <Navbar/>
      <CategoryTab />
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
        <Footer />
  </Provider>
   
  );
};

export default App;
