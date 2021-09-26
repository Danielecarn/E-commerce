import React from 'react';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ProductProvider } from './components/context/productContext';
import 'react-toastify/dist/ReactToastify.css';
import './global.css'

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes />
      </ProductProvider>
      <ToastContainer autoClose={3000} /> 
    </BrowserRouter>  
  );
}

export default App;
