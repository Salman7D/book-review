
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getReadBook } from '../Utility/localstorage';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    if (isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height)) {
        return '';
      }
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
    // const storedReadBooks = getReadBook();

    // // const data = storedReadBooks.map((page, index) => ({
    // //     bookName: page.bookName,
    // //     totalPages: page.totalPages,
    // //     key: `cell-${index}`, // Add a unique key for each cell
    // //   }));

    // // let data = []
    // // for(const page of storedReadBooks){
    // //     let usingData = {
    // //         name: page.bookName,
    // //         pages: page.totalPages
    // //     }
    // //     data.push(usingData);
    // // }
    // console.log(storedReadBooks);



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
        <div>
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
        // <Cell key={entry.key} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
        </div>
    );
};

export default PageRead;