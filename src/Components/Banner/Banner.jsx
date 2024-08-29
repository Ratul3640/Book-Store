import { Link } from "react-router-dom";


const Banner = () => {
    return (
      
        <div >
        <div className="hero min-h-screen bg-base-200 rounded-lg mt-10">
            <div className="hero-content grid lg:grid-cols-2 grid-cols-1 gap-48">

                <div>
                    <h1 className="lg:text-5xl text-4xl font-bold leading-normal text-[#131313]">Books to freshen.. <br /> up Your bookshelf</h1><br />
                   <Link to='/listed'>
                   <button className="btn bg-[#23BE0A] lg:text-xl text-white mt-5">View The List</button>
                   </Link>
                </div>
                <img src="https://i.ibb.co/kKk9tj4/1.png" className="max-w-sm rounded-lg " />
            </div>
        </div>
    </div>
    );
};

export default Banner;




