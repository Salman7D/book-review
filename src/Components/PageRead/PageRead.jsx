import PropTypes from "prop-types";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getReadBook } from '../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'green', 'chocolate', 'orange'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};



const PageRead = () => {

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
        <div style={{width: "100%", height: 300}}>
            <ResponsiveContainer>
            <BarChart
      width={1000}
      height={300}
      data={readingBooks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip/>
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {readingBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
      
    </BarChart>
    </ResponsiveContainer>
        </div>
    );
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.string,
    y: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
}


export default PageRead;