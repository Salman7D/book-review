import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import map from '/src/assets/Images/Frame2.png';
import people from '/src/assets/Images/Frame3.png';
import page from '/src/assets/Images/Frame4.png';
import { getWishlist } from "../Utility/localstorage2";

const Wishlist = () => {

    const lists = useLoaderData();

    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const storedWishlist = getWishlist();
        if(lists.length > 0){
            const booksListed = [];

            for(const id of storedWishlist){
                const book = lists.find(book => book.bookId === id);
                if(book){
                    booksListed.push(book);
                }
            }
            setWishlists(booksListed);
        }
    },[])





    return (
        <div>
            {
                wishlists.map(book => <div key={book.bookId}>
                    
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

export default Wishlist;