import Home from "./views/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./views/products";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;