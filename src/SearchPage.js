import {useState, useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'
import Shelf from './shelf'
import {search} from "./BooksAPI";

const SearchPage = ({updateBookShelf,myBooks,searchParam,setSearchParam}) => {
    const [searchBooks, setSearchBooks] = useState([])
    const startSearch = (e) => {
        let searchTarget = searchParam  //Set search target (search query) to previous search query
        if(e) {setSearchParam(e.target.value);searchTarget=(e.target.value)} //if there is a change in input field, set
        if (searchTarget === "") {return setSearchBooks([])}            // it to that instead
        const searchQuery = async () => {
           return await search(searchTarget)
        }
        searchQuery().then((res)=>{
            if (Array.isArray(res)) {
                res.forEach((b,i)=>{
                    myBooks.forEach((myBook)=>{     //If there are books in search that already exist in my library
                        if(myBook.id === b.id){     // set their shelves to the shelves in library
                            res[i].shelf = myBook.shelf
                        }
                    })
                })
                setSearchBooks(res) }
            else {setSearchBooks([])}
        },
            ()=>alert("Failed to do search\nPlease check your internet connection"))
    }
    useEffect(()=>{startSearch();},[])
    return <div>
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onChange={startSearch}
                        defaultValue={searchParam}
                    />
                </div>
            </div>
            <div className='search-books-results'>
                <Shelf books={searchBooks} updateBookShelf={updateBookShelf} title='Search Results'/>
            </div>
        </div>
    </div>

}

export default SearchPage