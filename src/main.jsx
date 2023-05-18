import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import PropsApi from './Components/ContextApi';
import Login from './Components/Login';
import Register from './Components/Register';
import Layout from './Components/Layout';
import Blogs from './Components/Blogs';
import AllToys from './Components/AllToys';
import AddToy from './Components/AddToy';
import MyToys from './Components/MyToys';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/toys')
      },

      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>
      },
      {
        path:'/addToy',
        element:<AddToy></AddToy>
      },
      {
        path:'/myToys',
        element:<MyToys></MyToys>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropsApi>
  <RouterProvider router={router} />
    </PropsApi>
  </React.StrictMode>,
)
