

const SortBy = () => {
    return (
     
         <div className="mt-10 mr-10 "> 
               <div className=" text-center">
               
               <div className="flex-none ">
                   <ul className="menu menu-horizontal px-1 bg-[#23BE0A] text-white rounded-lg w-32">
                       
                       <li className="text-center ">
                           <details className="">
                               <summary className="text-xl font-bold ">
                                  Sort By
                               </summary>
                               <ul className="p-2 bg-base-100 rounded-t-none text-black w-44">
                                   <li><a>Rating</a></li>
                                   <li><a>Number of pages</a></li>
                                   <li><a>Publisher year</a></li>
                               </ul>
                           </details>
                       </li>
                   </ul>
               </div>
           </div>
         </div>

       
    );
};

export default SortBy;
