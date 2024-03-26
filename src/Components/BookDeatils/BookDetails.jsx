import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId === idInt);
    console.log(book); 

   const handleReadBooks = () =>{
    toast.success("You have read this book");
   }
    
    return (
        <div className="lg:flex lg:gap-12">
            <div className="lg:ml-[135px] lg:mb-[164px] flex justify-between items-center rounded-2xl bg-[#1313130D] lg:w-[573px] lg:h-[711px]">
                <img className="lg:w-[425px] lg:h-[564px]" src={book.image} alt="" />
            </div>
            <div>
                <p className="lg:mb-4 text-4xl font-bold text-[#131313]">{book.bookName}</p>
                <p className="lg:mb-6 text-[#131313CC] text-xl font-medium">By: {book.author}</p>
                <div className="lg:mb-4 lg:h-[1px] lg:w-[549px] bg-[#13131326]">

                </div>
                <p className="text-[#131313CC] lg:mb-4 text-xl font-medium">{book.category}</p>
                <div className="lg:mb-4 lg:h-[1px] lg:w-[549px] bg-[#13131326]">

                </div>
                <p className="text-[#131313] text-base font-normal lg:mb-6 lg:w-[549px]">Review: <span className="text-[#131313B3] text-base font-normal">{book.review}</span></p>

                <div className="lg:flex lg:gap-4">
                    <p className="text-[#131313] text-base font-bold">Tag</p>
                    <div className=' lg:mb-6 lg:flex lg:gap-10 rounded-3xl bg-[#17BE0A0D] text-[#23BE0A]'>
                    {book.tags.map((tags, index) => (
                    <p key={index}>#{tags}</p>
                    ))}
                    </div>
                </div>
                

                <div className="lg:mb-6 lg:h-[1px] lg:w-[549px] bg-[#13131326]">

                </div>

                <div className="lg:flex lg:gap-16">
                    <p className="text-[#131313B3] text-base font-normal">Number of Pages:</p>
                    <p className="text-[#131313] text-base font-semibold">{book.totalPages}</p>
                </div>
                <div className="lg:flex lg:gap-[125px]">
                    <p className="text-[#131313B3] text-base font-normal">Publisher:</p>
                    <p className="text-[#131313] text-base font-semibold">{book.publisher}</p>
                </div>
                <div className="lg:flex lg:gap-[60px]">
                    <p className="text-[#131313B3] text-base font-normal">Year of Publishing:</p>
                    <p className="text-[#131313] text-base font-semibold">{book.yearOfPublishing}</p>
                </div>
                <div className="lg:flex lg:gap-[150px]">
                    <p className="text-[#131313B3] text-base font-normal">Rating:</p>
                    <p className="text-[#131313] text-base font-semibold">{book.rating}</p>
                </div>
                
                <div className="flex gap-4 lg:mt-8">
                    <button onClick={handleReadBooks} className="btn btn-ghost text-black text-lg font-semibold rounded-lg border border-solid border-[#1313134D]">Read</button>
                    <button className="btn btn-ghost text-white text-lg font-semibold rounded-lg bg-[#50B1C9] ">Wishlist</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;