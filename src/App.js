import "./App.css";
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import MyLibrary from "./MyLibrary";
import SearchPage from "./SearchPage";
import BookDetails from './BookDetails'
import {useEffect, useState} from "react";
import {getAll, update} from "./BooksAPI";
import EnableAlert from "./enableAlert";
import React from 'react'
const App = () => {
    const [draggedBook, setDraggedBook] = useState("")
    const [myBooks, setMyBooks] = useState([])
    const [enableAlert, setEnableAlert] = useState(true)
    const [searchParam, setSearchParam] = useState("")
    useEffect(() => {                   //GET ALL BOOKS FROM SERVER
        const getAllBooks = async () => {
            return await getAll()
        }
        getAllBooks().then((res) => {
                setMyBooks(res)
            },
            () => {
                alert("Failed to get Books\nPlease check your internet connection and refresh the page")
            });
    }, [])
    /**
     * This function updated the book shelf in the UI only.
     * @param book, a book object
     * @param shelfString, or shelfID as "currentlyReading"
     */
    const updateBookShelfInFrontend = (book, shelfString) => {
        let exists = false
        const updatedMyBooks = myBooks.map((b) => {      //Check if book exists in our library,if yes:
            if (b.id === book.id) {                     // update the book object in our library
                b.shelf = shelfString;
                exists = true;
                return b
            } else {
                return b
            }
        })
        if (exists) {
            setMyBooks(updatedMyBooks)
        } else {
            book.shelf = shelfString                //If it doesn't exist,assign the new shelf to its book object
            setMyBooks([...myBooks, book])      // and append to our library
        }
    }
    /**
     * Updates the book shelf
     * @param book
     * @param newBookShelf
     */
    const updateBookShelf = (book, newBookShelf) => {
        const oldBookShelf = book.shelf
        const doUpdate = async () => {
            await update(book, newBookShelf)
        }
        updateBookShelfInFrontend(book, newBookShelf)
        doUpdate().then(() => {
            if (enableAlert) {
                alert("Moved (" + book.title + ") Book into (" + convertToTitleCase(newBookShelf) + ")")
            }
        }, () => {
            alert("Failed to move (" + book.title + ") \nPlease Check your internet connection");
            updateBookShelfInFrontend(book, oldBookShelf)
        })
        return true
    }
    return <div>
        <EnableAlert enableAlert={enableAlert} setEnableAlert={setEnableAlert}/>
        <Router>
            <Routes>
                <Route path={'/'}
                       element={<MyLibrary myBooks={myBooks} updateBookShelf={updateBookShelf}
                                           draggedBook={draggedBook} setDraggedBook={setDraggedBook}/>}/>
                <Route path={'/search'} element={<SearchPage myBooks={myBooks} updateBookShelf={updateBookShelf}
                                                             searchParam={searchParam}
                                                             setSearchParam={setSearchParam}/>}/>
                <Route path={'/book/:id'} element={<BookDetails myBooks={myBooks} updateBookShelf={updateBookShelf}
                />}/>
            </Routes>
        </Router>
    </div>
}

export default App;

/**
 * function to convert strings like "currentlyReading" into "Currently Reading"
 * @param text
 * @returns {string}
 */
function convertToTitleCase(text) {
    const result = text.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}