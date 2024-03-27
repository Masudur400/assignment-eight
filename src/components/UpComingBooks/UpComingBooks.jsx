import { useLoaderData } from "react-router-dom";
import UpComingBook from "../UpComingBook/UpComingBook";

 
const UpComingBooks = () => {
    const books = useLoaderData();
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            {
                books.map(coming => <UpComingBook key={coming.id} coming={coming}></UpComingBook>)
            }
        </div>
    );
};
 
export default UpComingBooks;