
import { toast } from "react-toastify";
import { getReadBook } from "./localstorage";

// import 'react-toastify/dist/ReactToastify.css';
const getWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
        return JSON.parse(storedWishlist);
    }
    return[];
}


const saveWishlist = bookId => {
    const storedWishlist = getWishlist();
    const storedReadBook = getReadBook();

    const exists = storedWishlist.find(wishId => wishId === bookId);
    const exists2 = storedReadBook.find(readId => readId === bookId);
    if(!exists){
        storedWishlist.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
        toast.success("Added in the wishlist");
    }
    else if(!exists || !exists2){
        toast.error("Already read this books");
    }
    else{
        toast.error("Already Added in the wishlist");
    }

}


export {saveWishlist, getWishlist}