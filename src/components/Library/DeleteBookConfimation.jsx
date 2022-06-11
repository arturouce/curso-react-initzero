import { Modal, Button } from "react-bootstrap"

const DeleteBookConfirmation = ({book, show, onHide, deleteBookConfirmation}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ¿Desea eliminar el libro "{book.title}"?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={deleteBookConfirmation}>Aceptar</Button>{' '}
                    <Button variant="dark" onClick={onHide}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
 
export default DeleteBookConfirmation