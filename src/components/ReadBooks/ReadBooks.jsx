import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../../Utility/LocalStorage";




const ReadBooks = () => {
    const books = useLoaderData();
    const [bookSave,setBookSave] = useState([])
    // console.log(books)

    useEffect(() => {
        const storedBookIds = getReadBook();
        if(books.length > 0){
            // const savedBook = books.filter(book => storedBookIds.includes(book.bookId));
            // console.log(books,storedBookIds,savedBook);
            // console.log(books)
            const savedBook = []
            for(const id of storedBookIds){
                const book = books.find(book => book.bookId === id);
                if(book){
                    savedBook.push(book);
                }
            }
            setBookSave(savedBook);
            // console.log(books,storedBookIds,savedBook);
        }
    }, [])

    return (
        <div>
            <h3 className="text-3xl">read books :{bookSave.length}</h3>
             <div>
                {
                    bookSave.map((book,idx) => <div key={idx} book={book}>
                        <h2>{book.bookName}</h2>
                    </div>)
                }
             </div>
        </div>
    );
};

export default ReadBooks;