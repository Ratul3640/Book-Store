import {  NavLink } from "react-router-dom";


const Header = () => {
    const links = <>
 
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to="/listed" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Listed Books</NavLink></li>
        <li><NavLink to="/pages" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Pages to Read</NavLink></li>
        <li><NavLink to="/blogs" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Blog</NavLink></li>
        <li><NavLink to="/our" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}>Our Shop</NavLink></li>
        <li><NavLink to="/our" className={({ isActive }) => isActive ? 'border-2 border-[#23BE0A] text-[#23BE0A] rounded-lg font-bold' : 'font-bold'}> Add Product</NavLink></li>

        
    </>
    return (
        <div>
            <div className="navbar bg-base-100  mt-10 ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">

                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  ">
                            {links}
                        </ul>
                    </div>
                    <a className="text-[#23BE0A] font-bold text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;