import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../Utility/localstorage";


const ListedBooks = () => {
    const books = useLoaderData();

    const [readingBooks, setReadingBooks] = useState([]);
    useEffect(() => {
        const storedReadBooks = getReadBook();
        if(books.length > 0){




            // const BooksListed = books.filter(book => storedReadBooks.includes(book.bookId))
            
            const booksListed = [];
            for(const id of storedReadBooks){
                const book = books.find(book => book.bookId === id);
                if(book){
                    booksListed.push(book);
                }
            }
            setReadingBooks(booksListed);
            // console.log(books, storedReadBooks, booksListed); 
        }
    },[])
    return (
        <div>
            
            {
                readingBooks.map(book => <p key={book.bookId}>
                    <span>{book.bookName}</span>
                    <span>{book.author}</span>
                </p>)
            }
        </div>

    );
};

export default ListedBooks;