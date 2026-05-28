import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Components/App/App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Toaster position="top-right"/>
    </BrowserRouter>
  </StrictMode>,
);
