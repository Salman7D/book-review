import { toast } from "react-toastify";

const getReadBook = () => {
    const storedReadBook = localStorage.getItem('read-books');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return[];
}
 

const saveReadBook = bookId => {
    const storedReadBook = getReadBook();
    const exists = storedReadBook.find(readId => readId === bookId);
    if(!exists){
        storedReadBook.push(bookId);
        localStorage.setItem('read-books', JSON.stringify(storedReadBook))
        toast.success("Added in the Read Books");
    }
    else{
        toast.error("Already added in the Read Books");
    }
  


}


export {saveReadBook, getReadBook}