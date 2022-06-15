import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'react-bootstrap/Pagination'
import { useState } from 'react'

import LibraryList from './LibraryList'

import '../../styles/alert-styles.css'
import LibraryFormModal from './LibraryFormModal'
import useBookHook from '../../hooks/useBooksHook'
import AlertMessage from '../../commons/AlertMessage'
import usePaginationHook from '../../hooks/usePaginationHook'

const Library = () => {
    const [books, setBooks] = useState([])

    const [updatedBook, setUpdatedBook] = useState(null)
    const [optionsAlert, setOptionsAlert] = useState({ alertShow: false })
    const [show, setShow] = useState(false)

    const { handleSaveBook, handleDeleteBook, handleUpdateBook, selectUpdateBook } =
        useBookHook(setBooks, books, setUpdatedBook, setShow, setOptionsAlert)

    const {items, paginatedBooks} = usePaginationHook(books)

    return (
        <>
            <AlertMessage
                optionsAlert={optionsAlert}
                setOptionsAlert={setOptionsAlert} />

            <Container fluid>
                <br></br>
                <Row>

                    <Col>
                        <LibraryFormModal
                            setOptionsAlert={setOptionsAlert}
                            show={show}
                            setShow={setShow}
                            handleSaveBook={handleSaveBook}
                            handleUpdateBook={handleUpdateBook}
                            updatedBook={updatedBook}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col><LibraryList
                        books={paginatedBooks}
                        setShow={setShow}
                        selectUpdateBook={selectUpdateBook}
                        setBooks={setBooks}
                        handleDeleteBook={handleDeleteBook}
                    /></Col>
                </Row>
                <Pagination size="sm">{items}</Pagination>
            </Container>
        </>
    )
}

export default Library