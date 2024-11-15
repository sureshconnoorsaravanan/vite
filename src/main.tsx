import { StrictMode } from 'react'; // Add React import
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
