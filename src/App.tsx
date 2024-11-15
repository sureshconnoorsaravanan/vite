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
import { auth  ,db} from './components/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Profile from './components/profile';
import AddtoCart from './components/AddtoCart';
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  // Add other fields as needed
}
const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const [userDetails, setUserDetails] = useState<any>(null);


useEffect(() => {
  
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User is logged in:123", user);
      setUserDetails(user); // Call FetchData with the user UID
    } else {
      console.log("No user is logged in.");
      setUserDetails(null); // Clear user details when no user is logged in
    }
  });

  // Cleanup listener on component unmount
  return () => unsubscribe();
}, []);
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
          <Route path="/addtocart" element={<AddtoCart />} />
        </Routes>

      </main>

      <footer>
        <Footer />
      </footer>
    </Provider>
  );
};

export default App;
