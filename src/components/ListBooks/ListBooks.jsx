
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';   
import { getReadBook } from '../../Utility/LocalStorage';
import ReadBooks from '../ReadBooks/ReadBooks';


const ListBooks = () => {

    
    const books = useLoaderData();
    const [bookSave,setBookSave] = useState([])
    useEffect(() => {
        const storedBookIds = getReadBook();
        if(books.length > 0){ 
            const savedBook = []
            for(const id of storedBookIds){
                const book = books.find(book => book.bookId === id);
                if(book){
                    savedBook.push(book);
                }
            }
            setBookSave(savedBook); 
        }
    }, [])



    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className='flex justify-center my-10 items-center bg-gray-100 rounded-xl md:py-20 py-10 '>
            <h3 className="text-4xl font-bold">  Books</h3>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                <TabPanel>
                    <h3 className="text-3xl">Read Books: {bookSave.length}</h3>
                    <div> 
                    {
                        bookSave.map((book,idx) =>  <ReadBooks key={idx} book={book}></ReadBooks>)
                    }
                    </div>
                </TabPanel>
                <TabPanel></TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBooks;