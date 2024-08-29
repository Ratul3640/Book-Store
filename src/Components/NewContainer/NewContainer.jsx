import { useLoaderData, useParams } from "react-router-dom";
import { saveBlog } from "../Utility/Utility";




const NewContainer = () => {
    const newDiv = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id)

    const book = newDiv.find(book => book.id === idInt)

    const { bookName, author, image, review, totalPages, rating, category, tags, yearOfPublishing } = book;

    const handleRead = book => {
        saveBlog(book)
    }

    return (

        <div className="flex mt-20 gap-72">
            <div>
                <figure>
                    <img className="mt-10  w-[900px]  h-[200px] bg-base-100 shadow-xl" src={image} alt="Shoes" />
                </figure>
            </div>

            <div className="card border card-compact bg-base-100 shadow-xl p-5  ">

                <div>

                </div>
                <div>
                    <div className="card-body">
                       
                        <h2 className="card-title">{bookName}</h2>
                        <h2 className="card-title text-sm">BY:{author}</h2>
                        <p className="w-2/9">{review}</p>
                        <div className="flex gap-10 mt-5 mb-5 ">
                           <div>
                            <h2 className="font-bold text-xl">Tags:</h2>
                           </div>
                           <div className="flex gap-4"> <h2 className="bg-gray-200 text-[#23BE0A] rounded-lg p-2 gap-6"> {tags}</h2>
                            <h2 className="bg-gray-200 text-[#23BE0A] rounded-lg p-2"> {category}</h2></div>

                        </div>
                        <hr />


                       <div className="flex gap-20">
                       <div className="text-base">
                            <h2>Number of pages:</h2>
                            <h2>Publisher:</h2>
                            <h2>Year of Publisher:</h2>
                            <h2>Rating:</h2>
                          
                        </div>
                        <div className="text-base"> 
                            <h2>{totalPages}</h2>
                            <h2>{author}</h2>
                            <h2>{yearOfPublishing}</h2>
                            <h2>{rating}</h2>
                        </div>
                       </div>
                        <div className="flex gap-52 mt-10">
                            <h2>{category}</h2>
                            <div className="flex gap-2">
                                <h2>{rating}</h2>
                                <div className="w-4 ">
                                    <img src="/img/Vector.png" alt="" />
                                </div>

                            </div>


                        </div>
                        <div>

                            <div className="flex gap-5 mt-5">

                                <button onClick={() => handleRead(book)} className="btn bg-[#23BE0A] text-white">Read List</button>
                                <button className="btn bg-[#59C6D2] text-white">Wishlist List</button>
                            </div>
                        </div>

                    </div>
                </div>



            </div>

        </div>

    );
};

export default NewContainer;


