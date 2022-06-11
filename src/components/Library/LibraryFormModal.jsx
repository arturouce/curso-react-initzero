import { Button, Modal } from 'react-bootstrap'
import LibraryForm from './LibraryForm';

const LibraryFormModal = ({
    handleSaveBook,
    show,
    setShow,
    updatedBook,
    handleUpdateBook,
    setOptionsAlert
}) => {

    return (
        <>
            <Button variant="primary" onClick={() => setShow(true)}>
                Nuevo Libro
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LibraryForm
                        handleSaveBook={handleSaveBook}
                        updatedBook={updatedBook}
                        handleUpdateBook={handleUpdateBook}
                        setShow={setShow}
                        setOptionsAlert={setOptionsAlert}
                    />
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default LibraryFormModal