// import { Outlet } from "react-router-dom";
// import NavBar from "../NavBar/NavBar";

import Books from "../Books/Books";
import Header from "../Header/Header";

 
const Home = () => {
    return (
        <div> 
             <Header></Header>

             <Books></Books>

        </div>
    );
};

export default Home;