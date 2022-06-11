import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import DeleteBookConfirmation from './DeleteBookConfimation'

const LibraryList = ({
    books,
    selectUpdateBook,
    handleDeleteBook
}) => {

    const [show, setShow] = useState(false)
    const onHide = () => setShow(false)
    const [selectedBook, setSelectedBook] = useState({})

    const deleteBook = (book) => {
        setSelectedBook(book)
        setShow(true)
    }

    const deleteBookConfirmation = () => {
        handleDeleteBook(selectedBook._id)
        setShow(false)
    }

    return (
        <>
            <DeleteBookConfirmation
                show={show}
                onHide={onHide} book={selectedBook}
                deleteBookConfirmation={deleteBookConfirmation}
            />
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>isbn</th>
                        <th>Imagen</th>
                        <th>Titulo</th>
                        <th>Autor</th>
                        <th>Editorial</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => {
                        return (
                            <tr key={book._id}>
                                <td>{book.isbn}</td>
                                <th><img width="100"
                                    src={book.bookFile ? `data:${book.bookFile?.fileType};base64, ${book.bookFile?.file}` : ''} /></th>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.editorial}</td>
                                <td>
                                    <Button variant="secondary" size="sm" onClick={() => selectUpdateBook(book)}>
                                        Editar
                                    </Button>{' '}
                                    <Button variant="danger" size="sm" onClick={() => deleteBook(book)}>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default LibraryList