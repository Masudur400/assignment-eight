
import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
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
    const [displayBooks,setDisplayBooks] = useState([])
    const [displayBooks2,setDisplayBooks2] = useState([])

    const shortB = [];
    const shortW =[];


    const handleBooksFilter = (bookL,wish) =>{
        if(bookL === 'All' || wish === 'All'){
            setDisplayBooks(bookSave)
            setDisplayBooks2(wishList)
        }
        else if(bookL === 'Classic' || wish === 'Classic'){
            const  listBook = bookSave.filter(book => book.category=== 'classic')
            const wish  = wishList.filter(book => book.category=== 'classic')
            setDisplayBooks(listBook)
            setDisplayBooks2(wish)

        }
        else if(bookL === 'Fiction' || wish === 'Fiction'){
            const  listBook2 = bookSave.filter(book => book.category=== 'Fiction')
            const wish2  = wishList.filter(book => book.category=== 'Fiction')
            setDisplayBooks(listBook2)
            setDisplayBooks2(wish2)
        } 
        
        else if(bookL === 'Published' || wish === 'Published'){
            const publishedShort = bookSave.map(book => book.year_of_publishing); 
            const publishedShort2 = wishList.map(wish => wish.year_of_publishing);

            publishedShort.sort();
            publishedShort.reverse(); 

            publishedShort2.sort();
            publishedShort2.reverse();

            const shortPublish = bookSave.map(book => book); 
            const shortPublish2 = wishList.map(wish =>wish);

            for(const pShort of publishedShort){
                for(const sPublish of shortPublish){
                    if(pShort === sPublish.year_of_publishing){
                        shortB.push(sPublish);
                        setDisplayBooks(shortB);
                        
                    }
                }
            }
            for(const pShort2 of publishedShort2){
                for (const sPublish2 of shortPublish2){
                    if(pShort2 === sPublish2.year_of_publishing){
                        shortW.push(sPublish2)
                        setDisplayBooks2(shortW);
                    }
                }
            }
            
        }
        else if(bookL === 'Rating' || wish === 'Rating'){
            const publishedShort = bookSave.map(book => book.rating); 
            const publishedShort2 = wishList.map(wish => wish.rating);

            publishedShort.sort();
            publishedShort.reverse(); 

            publishedShort2.sort();
            publishedShort2.reverse();

            const shortPublish = bookSave.map(book => book); 
            const shortPublish2 = wishList.map(wish =>wish);

            for(const pShort of publishedShort){
                for(const sPublish of shortPublish){
                    if(pShort === sPublish.rating){
                        shortB.push(sPublish);
                        setDisplayBooks(shortB);
                        
                    }
                }
            }
            for(const pShort2 of publishedShort2){
                for (const sPublish2 of shortPublish2){
                    if(pShort2 === sPublish2.rating){
                        shortW.push(sPublish2)
                        setDisplayBooks2(shortW);
                    }
                }
            }
            
        }
        else if(bookL === 'Pages' || wish === 'Pages'){
            const publishedShort = bookSave.map(book => book.totalPages); 
            const publishedShort2 = wishList.map(wish => wish.totalPages);

            publishedShort.sort();
            publishedShort.reverse(); 

            publishedShort2.sort();
            publishedShort2.reverse();

            const shortPublish = bookSave.map(book => book); 
            const shortPublish2 = wishList.map(wish =>wish);

            for(const pShort of publishedShort){
                for(const sPublish of shortPublish){
                    if(pShort === sPublish.totalPages){
                        shortB.push(sPublish);
                        setDisplayBooks(shortB);
                        
                    }
                }
            }
            for(const pShort2 of publishedShort2){
                for (const sPublish2 of shortPublish2){
                    if(pShort2 === sPublish2.totalPages){
                        shortW.push(sPublish2)
                        setDisplayBooks2(shortW);
                    }
                }
            }
            
        }
         
        

       
         
    }




    useEffect(() => {
        const storedBookIds = getReadBook();
        const storedWishList = getWishListBook();
        if (books.length > 0) {
            const savedBook = []
            const savedWishList = []
            for (const id of storedBookIds) {
                const book = books?.find(book => book.bookId === id);
                if (book) {
                    savedBook.push(book);
                }
            }
            setBookSave(savedBook);
            setDisplayBooks(savedBook)

            for (const id of storedWishList) {
                const wishList = books?.find(book => book.bookId === id);
                if (wishList) {
                    savedWishList.push(wishList);
                }

            }
            setWishList(savedWishList);
            setDisplayBooks2(savedWishList)
        }
    }, [books]);





    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <div className='flex justify-center my-10 items-center bg-gray-100 rounded-xl md:py-14 py-10 '>
                <h3 className="text-4xl font-bold">  Books</h3>
            </div>

            <div className='my-10 flex justify-center'>
                <details className="dropdown  ">
                    <summary className="m-1 btn flex items-center gap-3 bg-green-400 text-white">Sort By <FaChevronDown></FaChevronDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=>handleBooksFilter('All')}><a>All</a></li>
                        <li onClick={()=>handleBooksFilter('Rating')}><a>Rating</a></li>
                        <li onClick={()=>handleBooksFilter('Published')}><a>Published of Year</a></li>
                        <li onClick={()=>handleBooksFilter('Pages')}><a>Pages</a></li>
                        <li onClick={()=>handleBooksFilter('Classic')}><a>Classic</a></li>
                        <li onClick={()=>handleBooksFilter('Fiction')}><a>Fiction  </a></li>
                        
                    </ul>
                </details>
            </div>

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>
                {/* tabpanel 1  */}
                <TabPanel>
                     
                    <div>
                        {
                            displayBooks.map((book, idx) => <ReadBooks key={idx} book={book}></ReadBooks>)
                        }
                    </div>
                </TabPanel>

                {/* tabpanel 2  */}
                <TabPanel>
                     
                    <div>
                        {
                            displayBooks2.map(((list, idx) => <WishList key={idx} list={list}></WishList>))
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListBooks;