import {useState,useEffect} from 'react'
import React from 'react'

const BookShelfChanger = ({book, updateBookShelf}) => {
    const [selectedShelf, setSelectedShelf] = useState("none")
    useEffect(()=>{
        if(book.shelf) {
            setSelectedShelf(book.shelf)
        }
    },[])
    return <div className="book-shelf-changer">
        <select onChange={(e) => {
            if(updateBookShelf(book, e.target.value)) {
                setSelectedShelf(e.target.value)
            }
        }} value={selectedShelf}>
            <option value="dis" disabled>
                Move to...
            </option>
            <option value="currentlyReading">
                Currently Reading {(selectedShelf === "currentlyReading") ? '✓' : ''}
            </option>
            <option value="wantToRead">Want to Read {(selectedShelf === "wantToRead") ? '✓' : ''}
            </option>
            <option value="read">Read {(selectedShelf === "read") ? '✓' : ''}</option>
            <option value="none">None {(!selectedShelf || selectedShelf==='none') ? '✓' : ''}</option>
        </select>
    </div>
}
export default BookShelfChanger
