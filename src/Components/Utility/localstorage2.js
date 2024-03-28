
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

    // if(!exists){
    //     return toast.error("Book already added");
    // }
    // else if (exists){
    //     return toast.success("Book added wishlist successfully");
    // }
    // else{
    //     storedWishlist.push(bookId);
    //      localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
    //     //  return toast.error("Book already added to wishlist");
         
    // }
    // <ToastContainer></ToastContainer>
}


export {saveWishlist, getWishlist}