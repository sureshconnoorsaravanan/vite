import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import { store } from './redux/store';
import Home from './views/Home.tsx';
import ProductList from './views/ProductList.tsx';
import CategoryTab from './components/CategoryTab.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar/>
      <CategoryTab />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:categoryId" element={<ProductList />} />
        </Routes>
        <Footer />
  </Provider>
   
  );
};

export default App;
