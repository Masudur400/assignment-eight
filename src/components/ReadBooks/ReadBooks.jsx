 




const ReadBooks = ({book}) => { 
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,year_of_publishing}=book;
    return (
        <div className="mb-5 md:flex border p-6 rounded-xl">
              <div className='bg-gray-100 p-6 rounded-lg'>
                <img className='md:w-60' src={image} alt="" />
              </div>

              <div>
                    
              </div>
        </div>
    );
};

export default ReadBooks;