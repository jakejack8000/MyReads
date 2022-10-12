import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {get} from './BooksAPI'
import BookShelfChanger from "./BookShelfChanger";
import React from 'react'

const BookDetails = ({updateBookShelf}) => {
    const navigate = useNavigate()
    let {id} = useParams()
    const [book, setBook] = useState({})
    useEffect(() => {
        const call = async () => {
            return await get(id)
        }
        call().then((res) => {
            setBook(res)
        }, () => {
            alert("Failed to get Book info\n Please Check internet connection")
        })
    }, [])
    if (Object.keys(book).length === 0) {
        return ''
    }
    return <div className="search-books">
        <div className="search-books-bar">
            <button onClick={() => navigate(-1)} style={{"border": 0}} className="close-search">
                Close
            </button>
        </div>
        <div className='book-details'>
            <img src={book.imageLinks.thumbnail}/>
            <div className='book-title'>{book.title}</div>
            <div className='book-authors'>{book.authors}
                <div className='book-changer-in-details-page'>
                    <BookShelfChanger book={book} updateBookShelf={updateBookShelf}/>
                </div>
            </div>
            <div>{book.description}</div>
        </div>
    </div>
}

export default BookDetails