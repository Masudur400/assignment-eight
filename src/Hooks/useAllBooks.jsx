import { useEffect, useState } from "react";

 
const useAllBooks = () => {

    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data =>setBooks(data))
    },[]);

    return  books
};

export default useAllBooks;