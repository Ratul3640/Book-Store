import { useLoaderData } from "react-router-dom";
import TotalBook from "../TotalBook/TotalBook";


const BookSeld = () => {

    const books = useLoaderData();
    console.log(books);
    
    return (
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        
       {
         books.map((book) => <TotalBook key={book.bookId} book={book}></TotalBook>)
       }
        
       </div>
    );
};

export default BookSeld;