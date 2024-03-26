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
import BookDetails from './Components/BookDeatils/BookDetails';



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
      element: <ListedBooks></ListedBooks>,
      loader: () => fetch('/books.json')
    },
    {
      path: "/cart/:bookId",
      element: <BookDetails></BookDetails>,
      loader: () => fetch("../books.json")
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
