import { toast } from "react-toastify";

const getReadBook = ()=>{
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveReadBooks = id =>{
    const storedBooks = getReadBook();
    const exist = storedBooks?.find(bookId =>   id === bookId);

    if(!exist){ 
        storedBooks.push(id);
        localStorage.setItem('read-book',JSON.stringify(storedBooks))
        toast('Add Successful Read') 
    } else{
        toast('already add')
    }

}

const getWishListBook = ()=>{
    const storedReadBook = localStorage.getItem('wishList-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook);
    }
    return [];
}

const saveWishListBooks = id =>{
    const storedBooks = getWishListBook();
    const exist = storedBooks?.find(bookId =>   id === bookId);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('wishList-book',JSON.stringify(storedBooks))
        toast('Add Successful WishList')
    }
    else{
        toast('already add')
    }

}

export {saveReadBooks,getReadBook,getWishListBook,saveWishListBooks};