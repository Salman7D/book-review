import { useEffect, useState } from "react";
import CartCard from "../CartCard/CartCard";

const Carts = () => {

        const [carts, setCarts] = useState([]);

        useEffect(() => {
            fetch("books.json")
            .then(res => res.json())
            .then(data => setCarts(data))
        },[])
            
        


    return (
        <div>
            <p className=" text-center text-[#131313] text-4xl font-bold">Books</p>
        <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:p-40">
        {
                carts.map(cart => <CartCard key={cart.bookId} cart={cart}></CartCard>)
        }
        </div>
            
        </div>
    );
};

export default Carts;