import { Outlet } from "react-router-dom"; 
import NavBar from "../NavBar/NavBar";

 
 
const Root = () => {
    return (
        <div className="container mx-auto md:px-10 px-3 ">  
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;