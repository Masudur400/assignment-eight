import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { Link  } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,author, bookName,category,tags, rating ,image } =  book;
 


    return (
       <div>
         <Link to={`/book/${bookId}`}>
         <div className="border rounded-md  p-5 ">
             <div className='flex items-center md:p-9 p-5 justify-center bg-gray-100 rounded-md'>
                <img className='h-[300px] w-[500px]' src={image} alt="" />
             </div>

             <div className='md:flex justify-between mt-5'>
               {
                  tags.map((tag,idx) => <p className='bg-gray-100 mb-2 text-sm text-center text-green-500 text-bold  px-2 rounded-full' key={idx}>{tag}</p>)
               }
                 
             </div>
             <p className='text-2xl font-bold mt-3'>{bookName}</p>
             <p className='text-xl   mt-3'>By : {author}</p>
             <div className="divider"></div>
             <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex gap-2 justify-center items-center'>{rating}<FaRegStar></FaRegStar></p>
             </div> 
        </div>
         </Link>
       </div>
    );
};

 Book.propTypes ={
    book: PropTypes.object
 }

export default Book;