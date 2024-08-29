import ReadBookWishlist from "../ReadBookWishlist/ReadBookWishlist";
import SortBy from "../SortBy/SortBy";


const ListedBooks = () => {
    return (
        <div className="mt-2">
            <h2 className="text-4xl text-center font-bold bg-gray-100 p-5">Books</h2>
            <SortBy></SortBy>
            <ReadBookWishlist></ReadBookWishlist>
        
          
        </div>


    );
};

export default ListedBooks;