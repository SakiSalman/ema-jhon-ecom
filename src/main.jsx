import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './components/Shop/Shop';
import Layout from './components/Layout/Layout';
import Orders from './components/Orders/Orders';
import Indevtory from './components/Inventory/Indevtory';
import Login from './components/Auth/Login';
import { cartProducts } from './Loaders/cartProductsLoader';
import 'boxicons'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children : [
      {
        path : '/',
        element : <Shop></Shop>
      },
      {
        path : '/order',
        element : <Orders></Orders>,
        loader : cartProducts
      }
      ,
      {
        path : '/inventory',
        element : <Indevtory></Indevtory>,
      }
      ,
      {
        path : '/login',
        element : <Login></Login>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
