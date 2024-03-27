import { useLoaderData } from "react-router-dom";


const ReadBooks = () => {
    const added = useLoaderData();
    
    return (
        <div>
            <p>{added.bookName}</p>
        </div>
    );
};

export default ReadBooks;