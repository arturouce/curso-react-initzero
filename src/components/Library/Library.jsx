import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

import LibraryList from './LibraryList'

import '../../styles/alert-styles.css'
import LibraryFormModal from './LibraryFormModal'
import useBookHook from '../../hooks/useBooksHook'
import AlertMessage from '../../commons/AlertMessage'

const Library = () => {
    const [books, setBooks] = useState([])

    const [updatedBook, setUpdatedBook] = useState(null)
    const [optionsAlert, setOptionsAlert] = useState({alertShow: false})
    const [show, setShow] = useState(false)

    const { handleSaveBook, handleDeleteBook, handleUpdateBook, selectUpdateBook } =
        useBookHook(setBooks, books, setUpdatedBook, setShow, setOptionsAlert)

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
                        books={books}
                        setShow={setShow}
                        selectUpdateBook={selectUpdateBook}
                        setBooks={setBooks}
                        handleDeleteBook={handleDeleteBook}
                    /></Col>
                </Row>
            </Container>
        </>
    )
}

export default Library