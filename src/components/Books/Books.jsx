import { useEffect, useState } from "react"; 
import Book from "../Book/Book";

 
const Books = () => { 
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[]); 
    return (
        <div className="mt-5 md:mt-14">
            <h3 className="text-5xl text-center font-bold my-6 md:my-20">Books</h3>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    books?.map((book,idx) => <Book key={idx} book = {book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;