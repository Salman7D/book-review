
import { toast } from "react-toastify";

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
    const exists = storedWishlist.find(wishId => wishId === bookId);
    if(!exists){
        storedWishlist.push(bookId);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist))
        toast.success("Added in the wishlist");
    }
    else{
        toast.error("Already Added in the wishlist");
    }

}


export {saveWishlist, getWishlist}