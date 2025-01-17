import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import ListedBooks from "../Components/ListedBooks/ListedBooks";
import BookDetails from "../Components/BookDeatils/BookDetails";
import PageRead from "../Components/PageRead/PageRead";
import ReadBooks from "../Components/ReadBooks/ReadBooks";
import Wishlist from "../Components/Wishlist/Wishlist";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import MostPopularBooks from "../Components/MostPopularBooks/MostPopularBooks";
import BestSellerBooks from "../Components/BestSellerBooks/BestSellerBooks";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [{
  
        path: "/",
        element: <Home></Home>
  
      },
      {
        path: "/listedbooks",                    
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json'),
        children:[
            {
                index: true,
                element: <ReadBooks></ReadBooks>,
                loader: () => fetch('/books.json'),
                
            },
            {
                path: "wishlist",
                element: <Wishlist></Wishlist>,
                loader: () => fetch('/books.json'),
            }
        ]
      },
      {
        path: "/cart/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/books.json")
      },
      {
        path: "/pageread",
        element: <PageRead></PageRead>,
        loader: () => fetch('/books.json'), 
      },
      {
        path: "/mostpopularbooks",
        element: <MostPopularBooks></MostPopularBooks>
      },
      {
        path: "/bestsellerbooks",
        element: <BestSellerBooks></BestSellerBooks>
      }
    ]
      
    },
    
  ]);