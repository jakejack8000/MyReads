import {Link} from 'react-router-dom'
import Shelf from './shelf'
const MyLibrary = ({myBooks,updateBookShelf,draggedBook,setDraggedBook}) => {

   return  <div>
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <Shelf  shelfId="currentlyReading" title='Currently Reading' updateBookShelf={updateBookShelf} books={myBooks.filter((book) => book.shelf === 'currentlyReading')} draggedBook={draggedBook} setDraggedBook={setDraggedBook}/>
            <Shelf shelfId="wantToRead" title='Want to Read' updateBookShelf={updateBookShelf} books={myBooks.filter((book) => (book.shelf ==='wantToRead'))} draggedBook={draggedBook} setDraggedBook={setDraggedBook}/>
            <Shelf shelfId="read" title='Read' updateBookShelf={updateBookShelf} books={myBooks.filter((book) => (book.shelf ==='read'))} draggedBook={draggedBook} setDraggedBook={setDraggedBook}/>
        </div>
       <div  className="open-search">
           <Link to='/search'>Add a book</Link>
       </div>
    </div>
}
export default MyLibrary