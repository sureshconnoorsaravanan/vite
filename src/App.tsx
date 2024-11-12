import { Provider } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import React, { useState , useEffect} from 'react';
import Navbar from './components/Navbar';
import { store } from './redux/store';
import Home from './views/Home';
import ProductList from './views/ProductList';
import Footer from './components/Footer';
import CategoryTab from './components/CategoryTab';
import { useTranslation } from 'react-i18next';
import LoginForm from './components/login/login';
import RegistrationForm from './components/register/register';
import { ToastContainer, toast } from 'react-toastify';
import Profile from './components/profile';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
const [user, setuser] = useState()


  return (
    <Provider store={store}>
      <header>
        <Navbar />
      </header>

      <nav aria-label="Category navigation">
        <CategoryTab />
      </nav>

      {location.pathname !== '/' && (
        <div className="container mt-3 d-flex justify-content-end">
          <button className="back-button" onClick={() => navigate('/')} aria-label="Back to Home">
            ← {t('back-to-home')}
          </button>
        </div>
      )}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:categoryId" element={<ProductList />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>

      </main>

      <footer>
        <Footer />
      </footer>
    </Provider>
  );
};

export default App;
