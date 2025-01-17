import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader/Loader.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
