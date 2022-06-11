import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import LibraryFormValidations from '../../validations/LibraryFormValidations'
import useUpdateHook from '../../hooks/useUpdateHook'
import AlertManagement from '../../commons/AlertManagement'
import Constants from '../../commons/Constants'

const { UPDATE_BOOK_WARNING_MSG } = Constants()

const LibraryForm = ({ handleSaveBook, setWarningShow, updatedBook, handleUpdateBook, setShow, setOptionsAlert }) => {

    const { warning } = AlertManagement()

    const [id, setId] = useState(null)
    const [isbn, setIsbn] = useState('')
    const [title, setTitle] = useState('')
    const [city, setCity] = useState('')
    const [author, setAuthor] = useState('')
    const [publicationDate, setPublicationDate] = useState(0)
    const [editorial, setEditorial] = useState('')
    const [edition, setEdition] = useState(0)
    const [numPages, setNumPages] = useState(0)
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [file, setFile] = useState({})

    const [errors, setErrors] = useState({})

    const [validated, setValidated] = useState(false)

    function createBook() {
        setId(updatedBook._id)
        setIsbn(updatedBook.isbn)
        setTitle(updatedBook.title)
        setCity(updatedBook.city)
        setAuthor(updatedBook.author)
        setPublicationDate(updatedBook.publicationDate)
        setEditorial(updatedBook.editorial)
        setEdition(updatedBook.edition)
        setNumPages(updatedBook.numPages)
        setDescription(updatedBook.description)
        setStatus(updatedBook.status)
    }

    useEffect(() => {
        if (updatedBook) {
            createBook()
        }
    }, [updatedBook])

    const hadleUpdate = () => {

        let book = {
            id,
            isbn,
            title,
            city,
            author,
            publicationDate,
            editorial,
            edition,
            numPages,
            description,
            status,
            file
        }

        const libraryValidations = LibraryFormValidations(book)
        setErrors(libraryValidations)

        if (Object.keys(libraryValidations).length > 0) {
            setOptionsAlert(warning(UPDATE_BOOK_WARNING_MSG))
            setValidated(true)
        } else {
            handleUpdateBook(book)
            clearForm()
        }
    }

    const { setIsUpdated } = useUpdateHook(hadleUpdate)

    const handleSave = () => {
        let book = {
            isbn,
            title,
            city,
            author,
            publicationDate,
            editorial,
            edition,
            numPages,
            description,
            status,
            file
        }

        const libraryValidations = LibraryFormValidations(book)
        setErrors(libraryValidations)

        if (Object.keys(libraryValidations).length > 0) {
            setValidated(true)
        } else {
            handleSaveBook(book)
            clearForm()
        }
    }

    function clearForm() {
        setId(null)
        setIsbn('')
        setTitle('')
        setCity('')
        setAuthor('')
        setPublicationDate('')
        setEditorial('')
        setEdition('')
        setNumPages('')
        setDescription('')
        setStatus('')
    }

    return (
        <>
            <Form validated={validated}>
                <h1>Biblioteca</h1>
                <Form.Group className="mb-3" controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Form.Control
                        type="text"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                        placeholder="Introduce el ISBN" />
                    <Form.Control.Feedback type="invalid">
                        {errors.isbn}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="Introduce el titulo" />
                    <Form.Control.Feedback type="invalid">
                        {errors.title}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        placeholder="Introduce la ciudad" />
                    <Form.Control.Feedback type="invalid">
                        {errors.city}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="author">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        placeholder="Introduce el autor" />
                    <Form.Control.Feedback type="invalid">
                        {errors.author}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="publicationDate">
                    <Form.Label>Año de publicación</Form.Label>
                    <Form.Control
                        type="number"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                        required
                        placeholder="Introduce el año de publicación" />
                    <Form.Control.Feedback type="invalid">
                        {errors.publicationDate}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="editorial">
                    <Form.Label>Editorial</Form.Label>
                    <Form.Control
                        type="text"
                        value={editorial}
                        onChange={(e) => setEditorial(e.target.value)}
                        required
                        placeholder="Introduce la editorial" />
                    <Form.Control.Feedback type="invalid">
                        {errors.editorial}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="edition">
                    <Form.Label>Numero de edición</Form.Label>
                    <Form.Control
                        type="number"
                        value={edition}
                        onChange={(e) => setEdition(e.target.value)}
                        required
                        placeholder="Introduce la edición" />
                    <Form.Control.Feedback type="invalid">
                        {errors.edition}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="numPages">
                    <Form.Label>Número de paginas</Form.Label>
                    <Form.Control
                        type="number"
                        value={numPages}
                        onChange={(e) => setNumPages(e.target.value)}
                        required
                        placeholder="Introduce el número de páginas" />
                    <Form.Control.Feedback type="invalid">
                        {errors.numPages}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Introduce la descripcion" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="status">
                    <Form.Label>Estatus</Form.Label>
                    <Form.Select
                        aria-label="Default select example"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">Selecciona una opción</option>
                        <option value="ACTIVE">Activo</option>
                        <option value="DISABLE">Inactivo</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {errors.status}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="file" className="mb-3">
                    <Form.Label>Imagen de portada</Form.Label>
                    <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </Form.Group>
                {
                    (id)
                        ? (
                            <Button variant="primary" type="button" onClick={() => setIsUpdated(true)}>
                                Editar
                            </Button>
                        )
                        : (
                            <Button variant="primary" type="button" onClick={handleSave}>
                                Guardar
                            </Button>
                        )
                }
                {' '}
                <Button variant="dark" type="button" onClick={() => setShow(false)}>
                    Cancelar
                </Button>
            </Form>
        </>
    )
}

export default LibraryForm