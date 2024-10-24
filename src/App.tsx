import React from 'react'; // Add React import
import { Provider } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { store } from './redux/store';
import Home from './views/Home';
import ProductList from './views/ProductList';
import Footer from './components/Footer';
import CategoryTab from './components/CategoryTab';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Provider store={store}>
      <header>
        <Navbar />
      </header>
      
      <nav aria-label="Category navigation">
        <CategoryTab />
      </nav>

      {location.pathname !== "/" && (
        <div className="container mt-3 d-flex justify-content-end">
          <button
            className="btn btn-light"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            aria-label="Back to Home"  
          >
            ← Back to Home
          </button>
        </div>
      )}
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:categoryId" element={<ProductList />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Provider>
  );
};

export default App;
