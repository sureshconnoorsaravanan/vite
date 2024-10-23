import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/navbar';
import { store } from './redux/store';
import Home from './views/home/home';
import ProductList from './views/productlist/productlist';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list/:categoryId" element={<ProductList />} />
        </Routes>
  </Provider>
   
  );
};

export default App;
