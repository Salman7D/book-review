import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../Utility/localstorage";
import map from '/src/assets/Images/Frame2.png';
import people from '/src/assets/Images/Frame3.png';
import page from '/src/assets/Images/Frame4.png';



const ReadBooks = () => {
    const books = useLoaderData();

    const [readingBooks, setReadingBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getReadBook();
        if(books.length > 0){
            const booksListed = [];

            for(const id of storedReadBooks){
                const book = books.find(book => book.bookId === id);
                if(book){
                    booksListed.push(book);
                }
            }
            setReadingBooks(booksListed);
        }
    },[])
    
    return (
        <div>
            {
                readingBooks.map(book => <div key={book.bookId}>
                    
                    <div className="lg:p-6 p-3 lg:mb-5 lg:mt-5 ml-5 mb-5 mt-5 lg:w-[1300px] w-[500px] rounded-2xl border border-solid border-[#13131326]">
                        <div className="flex lg:gap-4 gap-4">
                            <div className="lg:flex justify-center items-center rounded-2xl bg-[#0D0D0D0D] lg:w-[230px]">
                                <img className="lg:mt-0 mt-20" src={book.image} alt="" />
                            </div>

                            <div>
                                <p className="text-[#131313] text-2xl font-bold">{book.bookName}</p>
                                <p className="lg:mb-3 mb-3 text-[#131313CC] text-base font-medium">By: {book.author}</p>
                                <div className="lg:flex lg:gap-4">
                                    <p className="text-[#131313] text-base font-bold">Tag</p>
                                    <div className='mb-3 lg:mb-6 lg:flex lg:gap-10 rounded-3xl bg-[#17BE0A0D] text-[#23BE0A]'>
                                    {book.tags.map((tags, index) => (
                                    <p key={index}>#{tags}</p>
                                    ))}
                                    </div>

                                    <div className="mb-3 flex gap-2">
                                        <img className="lg:w-[24px] lg:h-[24px]" src={map} alt="" />
                                        <p className="text-[#131313CC] text-base font-normal">Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                </div>
                                        <div className="mb-3 flex gap-5">
                                        <div className="flex gap-2">
                                        <img className="w-[24px] h-[24px]" src={people} alt="" />
                                        <p className="text-[#131313CC] text-base font-normal">Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img className="w-[24px] h-[24px]" src={page} alt="" />
                                        <p className="text-[#131313CC] text-base font-normal">Page: {book.totalPages}</p>
                                    </div>
                                        </div>

                                        <div className="lg:mt-2 lg:mb-5 bg-[#0D0D0D26] lg:h-[1px] lg:w-[867px]">

                                        </div>

                                        <div className="flex lg:gap-4 gap-3 mb-3">
                                            <div className="text-center rounded-3xl bg-[#328EFF26] lg:p-2">
                                                <p className="text-[#328EFF]">Category: {book.category}</p>
                                            </div>
                                            <div className="text-center rounded-3xl bg-[#FFAC3326] lg:p-2">
                                                <p className="text-[#FFAC33]">Rating: {book.rating}</p>
                                            </div>
                                            <button className="btn btn-ghost rounded-3xl bg-[#23BE0A] lg:p-2">
                                                <p className="text-[#FFF]">View Details</p>
                                            </button>
                                        </div>


                                    
                            </div>
                        </div>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default ReadBooks;









