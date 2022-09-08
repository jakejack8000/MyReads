import Book from './book'

const Shelf = ({title, books, updateBookShelf, draggedBook, setDraggedBook, shelfId}) => {
    return <div className='bookshelf' onDrop={(e) => {
        e.preventDefault();
        updateBookShelf(draggedBook, shelfId)       //If a book was dragged and dropped here, call updateBookShelf()
    }} onDragOver={(e) => e.preventDefault()}>
        <div className='bookshelf-title'>{title}</div>
        <div className='bookshelf-books'>
            <ol className='books-grid'>
                {
                    books.map((book) =>                 //Create a List Item for each book in the Array
                        <li key={book.id}><Book updateBookShelf={updateBookShelf} book={book}
                                                setDraggedBook={setDraggedBook}/></li>
                    )}
            </ol>
        </div>
    </div>
}
export default Shelf