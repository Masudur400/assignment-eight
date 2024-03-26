import { Link } from "react-router-dom";

 
const Header = () => {
    return (
        <div className=" md:flex bg-gray-100 rounded-xl mt-10 px-2 py-5 md:px-14 lg:px-32 lg:py-10">
            <div className="lg:w-1/2 md:hidden flex justify-end">
                <img src="/src/assets/images/pngwing 1.png" alt="" />
            </div>
            <div className="lg:w-1/2 mt-3 lg:mt-10">
            <h3 className=" text-3xl lg:text-5xl font-bold mt-9 mx-2">Books to freshen up 
             your bookshelf </h3>
            <Link to="/listBooks"><button className="btn text-white bg-green-500 lg:mt-20 mt-5 mx-2">View The List</button> </Link>
            </div>

            <div className="lg:w-1/2 hidden md:flex  justify-end">
                <img src="/src/assets/images/pngwing 1.png" alt="" />
            </div>
        </div>
    );
};

export default Header;