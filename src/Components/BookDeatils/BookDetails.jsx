import { useLoaderData, useParams } from "react-router-dom";



const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    console.log(book); 

   
    
    return (
        <div>
            <p>hiii</p>
        </div>
    );
};

export default BookDetails;