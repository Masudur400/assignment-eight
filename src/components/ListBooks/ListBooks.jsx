
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getReadBook, getWishListBook } from '../../Utility/LocalStorage';
import ReadBooks from '../ReadBooks/ReadBooks';
import WishList from '../WishList/WishList';


const ListBooks = () => {


    const books = useLoaderData();
    const [bookSave, setBookSave] = useState([])
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        const storedBookIds = getReadBook();
        const storedWishList = getWishListBook();
        if (books.length > 0) {
            const savedBook = []
            const savedWishList =[]
            for (const id of storedBookIds) {
                const book = books?.find(book => book.bookId === id);
                if (book) {
                    savedBook.push(book);
                }
            }
            setBookSave(savedBook);

            for(const id of storedWishList){
                const wishList = books?.find (book  => book.bookId === id);
                if(wishList){
                    savedWishList.push(wishList);
                }
                 
            }
            setWishList(savedWishList);
           
        }
    }, []);

     



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
                {/* tabpanel 1  */}
                <TabPanel>
                    <h3 className="text-3xl">Read Books: {bookSave.length}</h3>
                    <div>
                        {
                            bookSave.map((book, idx) => <ReadBooks key={idx} book={book}></ReadBooks>)
                        }
                    </div>
                </TabPanel>

                {/* tabpanel 2  */}
                <TabPanel>
                    <h2 className="text-3xl">WishList Read : {wishList.length}</h2>
                    <div>
                        {
                            wishList.map(((list,idx) => <WishList key={idx} list={list}></WishList>))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBooks;