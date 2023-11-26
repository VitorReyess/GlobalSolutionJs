import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';


const requireAuth = () => {
  const token = sessionStorage.getItem('Logged');
  return token;
};

// Componente de rota protegida
const ProtectedRoute = ({ children }) => {
  return requireAuth() ? children : <Navigate to="/login" />;
};
import Login from './Routes/Login.jsx';
import About from './Routes/About';
const router = createBrowserRouter([
  {
    path: "/",element: <App />, children: [
      {path: "/login", element: <Login /> },
      {path: "/", element: <ProtectedRoute><About /></ProtectedRoute>}
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

