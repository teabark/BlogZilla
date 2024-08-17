import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './pages/App';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import Register from './pages/Register';
import Read from "./pages/Read"
import Sports from './pages/Features/Sports';
import Business from './pages/Features/Business';
import Technology from './pages/Features/Technology';
import Politics from './pages/Features/Politics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/login",
    element: <Signin/>
  },
  {
    path: "/read/:id",
    element: <Read/>
  },
  {
    path: "/sports",
    element: <Sports/>
  },
  {
    path: "/business",
    element: <Business/>
  },
  {
    path: "/technology",
    element: <Technology/>
  },
  {
    path: "/politics",
    element: <Politics/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
