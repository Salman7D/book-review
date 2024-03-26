import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PageRead from './Components/PageRead/PageRead';
import CardDetails from './Components/Pages/CartDetails/CardDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{

      path: "/",
      element: <Home></Home>

    },
    {
      path: "/listedbooks",
      element: <ListedBooks></ListedBooks>
    },
    {
      path:"/cart/:bookId",
      element: <CardDetails></CardDetails>,
      loader: ({params}) => fetch(`books.json/${params.bookId}`),
    },
    {
      path: "/pageread",
      element: <PageRead></PageRead>
    }
  ]
    
  },
  
]);
 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
