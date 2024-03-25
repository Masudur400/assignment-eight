import { useEffect, useState } from "react";


const useBooks = () => {

    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(res =>res.json())
        .then(data => {
            setBooks(data)
            // console.log(data)
        })
    }, [])
    return  books;
};

export default useBooks;