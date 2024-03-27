/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../Utility/localstorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const PageRead = () => {
    const pages = useLoaderData();

    const [readingPages, setReadingPages] = useState([]);

    useEffect(() => {
        const storedReadBooks = getReadBook();
        if(pages.length > 0){

            const readsPage = [];
            for(const id of storedReadBooks){
                const page = pages.find(page => page.bookId ===id);
                if(page){
                    readsPage.push(page);
                }
            }
            setReadingPages(readsPage);
            
        }
    },[])


    return (
        <div>
            {
                readingPages.map(book => (<div key={book.bookId}>
                     
                    <BarChart width={500} height={400} data={[book]} margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName"></XAxis>
                    <YAxis></YAxis>
                    
                    <Bar dataKey="totalPages" fill="#8884d8"></Bar>
                    </BarChart>

                    
                </div>))
            }
        </div>
    );
};

export default PageRead;