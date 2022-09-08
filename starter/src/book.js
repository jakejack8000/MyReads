import BookShelfChanger from './BookShelfChanger.js'
import {Link} from "react-router-dom";

const Book = ({book, updateBookShelf, setDraggedBook}) => {
    if (!Object.keys(book).includes('imageLinks')) {
        return ''
    }
    return <div className='book' draggable="true" onDragStart={() => {
        setDraggedBook(book)
    }}>
        <div className='book-top'>
            <Link style={{textDecoration: "none"}} to={'/book/' + book.id}>
                <img className='book-cover' src={book.imageLinks.thumbnail}/>
            </Link>
            <BookShelfChanger updateBookShelf={updateBookShelf} book={book}/>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
    </div>
}

export default Book