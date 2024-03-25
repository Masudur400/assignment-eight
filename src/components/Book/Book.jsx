import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { useNavigate  } from 'react-router-dom';

const Book = ({book}) => {
    const {bookId,author, bookName,category, rating ,image } =  book;

    const navigate = useNavigate();

    const handleDetails = () =>{
        navigate(`/book/${bookId}`)
    }


    return (
        <div onClick={handleDetails} className="border rounded-md  p-5 ">
             <div className='flex items-center md:p-9 p-5 justify-center bg-gray-100 rounded-md'>
                <img className='h-1/2 w-1/2' src={image} alt="" />
             </div>

             <div className='flex justify-between mt-5'>
                <button className='bg-gray-100 text-green-500 text-bold px-4 py-2 rounded-full'>Young Adult</button>
                <button className='bg-gray-100 text-green-500 text-bold px-4 py-2 rounded-full'>Identity</button>
             </div>
             <p className='text-2xl font-bold mt-3'>{bookName}</p>
             <p className='text-xl   mt-3'>By : {author}</p>
             <div className="divider"></div>
             <div className='flex justify-between'>
                <p>{category}</p>
                <p className='flex gap-2 justify-center items-center'>{rating}<FaRegStar></FaRegStar></p>
             </div> 
        </div>
    );
};

 Book.propTypes ={
    book: PropTypes.object
 }

export default Book;