 
import PropTypes from 'prop-types';


const UpComingBook = ({coming}) => {
    const{bookname,writer,image,description}=coming;
    return (
        <div className="flex flex-col">
            <div className="border rounded-lg p-8 flex-grow">
               <div className="bg-gray-100 p-7 flex justify-center items-center rounded-lg">
               <img src={image} alt="" />
               </div> 
               <div className="flex-grow">
               <h3 className="text-2xl font-bold mt-3">{bookname}</h3>
               <h3 className=" text-xl mt-3"><span className="text-xl font-bold">writer :</span> {writer}</h3> 
               <p className="mt-3 "><span className="text-lg font-bold">Description : </span> {description}</p>
               </div>
            </div>
        </div>
    );
};

UpComingBook.propTypes = {
    coming: PropTypes.object
}

export default UpComingBook;