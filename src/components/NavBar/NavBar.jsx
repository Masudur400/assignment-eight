import { Link, NavLink } from "react-router-dom";

 

 
const NavBar = () => { 

    const links = <>
        <li><NavLink to="/">Home</NavLink></li> 
        <li><NavLink to="/listBooks">Listed Books</NavLink></li> 
        <li><NavLink to="/pagesToRead">Pages to Read</NavLink></li>  
        <li><NavLink to="/moreBooks">More Books</NavLink></li>  
        <li><NavLink to="/favorite">Favorite</NavLink></li>  
    </>

    return (
        <div>
            <div className="navbar bg-base-100 mt-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {links}
      </ul>
    </div>
    <Link to ='/'><p className="btn btn-ghost text-xl text-green-500 font-bold">Book Vibe</p></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="md:navbar-end flex gap-1 "> 
  <button className="btn ml-10 bg-green-500">Sign In</button>
  <button className="btn hidden md:flex bg-cyan-300">Sign Up</button>
  </div>
</div>
        </div>
    );
};

export default NavBar;