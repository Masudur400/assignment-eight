
const getReadBook = ()=>{
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBooks = id =>{
    const storedBooks = getReadBook();
    const exist = storedBooks.find(bookId =>   id === bookId);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('read-book',JSON.stringify(storedBooks))
    }

}

export {saveReadBooks,getReadBook};