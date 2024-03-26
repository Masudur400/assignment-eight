import { useEffect, useState } from "react";
import { getReadBook } from "../Utility/LocalStorage"; 
import useAllBooks from "./useAllBooks";

  
 const useReadedBook = () => {
    
    const books = useAllBooks();
    const [bookSave, setBookSave] = useState([])

    useEffect(() => {
        const storedBookIds = getReadBook(); 
        if (books.length > 0) {
            const savedBook = [] 
            for (const id of storedBookIds) {
                const book = books?.find(book => book.bookId === id);
                if (book) {
                    savedBook.push(book);
                }
            }
            setBookSave(savedBook); 
        }
    }, [books]);

    return  bookSave;
 };
 
 export default useReadedBook;