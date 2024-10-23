import Home from "./views/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./views/products";
import Navbar from './components/navbar/navbar';

const App: React.FC = () => {
  return (<>
      <Router>
      <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:categoryId" element={<Products />} />
      </Routes>
      </Router>
  </>
   
  );
};
export default App;