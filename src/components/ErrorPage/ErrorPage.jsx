import { Link } from "react-router-dom";

 
const ErrorPage = () => {
    return (
        <div className=" ">
            <div className="flex  justify-center items-center mt-20 md:mt-36 ">
            <h3 className="text-3xl md:text-5xl font-extrabold opacity-80 ">Page Not Found !!!</h3>
        </div>
            <div className="flex justify-center items-center mt-10">
            <Link to="/"><button className="btn bg-green-500 font-bold">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;