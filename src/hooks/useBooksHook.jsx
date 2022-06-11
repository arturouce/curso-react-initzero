import { useEffect } from "react"
import AlertManagement from "../commons/AlertManagement"
import Constants from "../commons/Constants"
import BookService from "../service/BookService"

const {
    UPDATE_BOOK_SUCCESS_MSG,
    UPDATE_BOOK_ERROR_MSG
} = Constants()

const useBookHook = (setBooks, books, setUpdatedBook, setShow, setOptionsAlert) => {

    const {success, error} = AlertManagement()

    const { saveBook, findAllBooks, deleteBook, updateBook } = BookService()

    const handleSaveBook = async (book) => {
        let formdata = createFormBook(book)

        let newBook = await saveBook(formdata)

        if(newBook) {
            setBooks([ newBook, ...books ])
            setShow(false)
        }
    }

    const handleFindAllBooks = async () => {
        const allBooks = await findAllBooks()

        console.log(allBooks)

        if (allBooks) {
            setBooks(allBooks)
        }
    }

    const handleDeleteBook = async (id) => {
        const deletedBook = await deleteBook(id)

        if(deletedBook) {
            const newBooks = books.filter(book => book._id !== deletedBook._id)
            setBooks(newBooks)
        }
    }

    const handleUpdateBook = async (book) => {
        let formdata = createFormBook(book)

        const updatedBook = await updateBook(formdata)

        if(updateBook) {
            const updatedBooks = books.map(b => b._id === updatedBook._id ? updatedBook : b)
            setBooks(updatedBooks)
            
            setUpdatedBook(null)
            setOptionsAlert(success(UPDATE_BOOK_SUCCESS_MSG))
            setShow(false)
            setTimeout(() => {
                setOptionsAlert({alertShow: false})
            }, 2000)
        } else {
            setOptionsAlert(error(UPDATE_BOOK_ERROR_MSG))
        }
    }

    const selectUpdateBook = (book) => {
        setUpdatedBook(book)
        setShow(true)
    }
    
    const createFormBook = (book) => {
        let formdata = new FormData()

        formdata.append('id', book?.id)
        formdata.append('isbn', book.isbn)
        formdata.append('author', book.author)
        formdata.append('description', book.description)
        formdata.append('edition', book.edition)
        formdata.append('editorial', book.editorial)
        formdata.append('numPages', book.numPages)
        formdata.append('publicationDate', book.publicationDate)
        formdata.append('status', book.status)
        formdata.append('title', book.title)
        formdata.append('city', book.city)
        formdata.append('file', book.file)

        return formdata
    }

    useEffect(() => {
        handleFindAllBooks()
    }, [])

    return { handleSaveBook, handleDeleteBook, handleUpdateBook, selectUpdateBook }
}

export default useBookHook