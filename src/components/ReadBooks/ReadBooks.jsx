
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const ReadBooks = ({ book }) => {
    const {bookId, bookName, author, image, totalPages, rating, category, tags, publisher, year_of_publishing } = book;
    return (
        <div className="mb-5 md:flex border p-6 rounded-xl gap-10">
            <div className='bg-gray-100 p-6 rounded-lg'>
                <img className='md:w-60' src={image} alt="" />
            </div>

            <div>
                <p className='text-3xl font-bold mt-5'>{bookName}</p>
                <p className='text-xl mt-5'>By : {author}</p>
                <div className='lg:flex gap-4 mt-5'>
                    <div className='lg:flex gap-3'>
                        <p className='font-bold'>Tags : </p>
                        {
                            tags.map((tag, idx) => <p className=' mb-2  px-2 py-1 rounded-full text-green-500 bg-green-50' key={idx}>{tag}</p>)
                        }
                    </div>
                    <div>
                        <p className="flex gap-2 items-center justify-center"><IoLocationOutline></IoLocationOutline>year of publishing : {year_of_publishing}</p>
                    </div>

                </div>
                <div className='lg:flex gap-7 mt-5 space-y-2'>
                    <p className='flex gap-2 md:justify-center items-center'><CgProfile></CgProfile>Publisher : {publisher}</p>
                    <p className='flex gap-2 md:justify-center items-center'><RiPagesLine></RiPagesLine>TotalPages : {totalPages}</p>
                </div>
                <div className="divider"></div>
                <div className='lg:flex grid space-y-2 gap-3'>
                    <button className="bg-blue-50 text-blue-500 px-3 py-2 rounded-full">category : {category}</button>
                    <button className="bg-orange-50 text-orange-500 px-3 py-2 rounded-full">rating : {rating}</button> 
                    <Link to={`/book/${bookId}`} className='bg-green-500 px-3 py-2 rounded-full text-white font-bold text-center'> <button>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

ReadBooks.propTypes = {
    book: PropTypes.object
}

export default ReadBooks;