import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getReadBook } from "../Utility/localstorage";
import map from '/src/assets/Images/Frame2.png';
import people from '/src/assets/Images/Frame3.png';
import page from '/src/assets/Images/Frame4.png';


const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
        <div className="lg:ml-[100px]">
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	<Link 
    to="" 
    onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : "border-b" } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>
		<span>Read Books</span>
	</Link>

	<Link 
    to={`Wishlist`} 
    onClick={() => setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0" : "border-b" } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>
		<span>WishList</span>
	</Link>
	
	
</div>
<Outlet></Outlet>
            
            {
                readingBooks.map(book => <div key={book.bookId}>
                    
                    <div>
                        <div className="flex lg:gap-4">
                            <div className="lg:mt-10 lg:flex justify-center items-center rounded-2xl bg-[#0D0D0D0D] lg:w-[230px]">
                                <img src={book.image} alt="" />
                            </div>

                            <div className="lg:mt-10">
                                <p>{book.bookName}</p>
                                <p>By: {book.author}</p>
                                <div className="lg:flex lg:gap-4">
                                    <p className="text-[#131313] text-base font-bold">Tag</p>
                                    <div className=' lg:mb-6 lg:flex lg:gap-10 rounded-3xl bg-[#17BE0A0D] text-[#23BE0A]'>
                                    {book.tags.map((tags, index) => (
                                    <p key={index}>#{tags}</p>
                                    ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <img className="lg:w-[24px] lg:h-[24px]" src={map} alt="" />
                                        <p>Year of Publishing: {book.yearOfPublishing}</p>
                                    </div>
                </div>
                                        <div className="flex gap-5">
                                        <div className="flex gap-2">
                                        <img src={people} alt="" />
                                        <p>Publisher: {book.publisher}</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <img src={page} alt="" />
                                        <p>Page: {book.totalPages}</p>
                                    </div>
                                        </div>

                                        <div className="bg-[#0D0D0D26] lg:h-[1px] lg:w-[867px]">

                                        </div>

                                        <div className="flex lg:gap-4">
                                            <div className="rounded-3xl bg-[#328EFF26] lg:p-2">
                                                <p className="text-[#328EFF]">Category: {book.category}</p>
                                            </div>
                                            <div className="rounded-3xl bg-[#FFAC3326] lg:p-2">
                                                <p className="text-[#FFAC33]">Category: {book.category}</p>
                                            </div>
                                            <div className="rounded-3xl bg-[#23BE0A] lg:p-2">
                                                <p className="text-[#FFF]">Category: {book.category}</p>
                                            </div>
                                        </div>


                                    
                            </div>
                        </div>
                    </div>
                    
                </div>)
            }
        </div>

    );
};

export default ListedBooks;