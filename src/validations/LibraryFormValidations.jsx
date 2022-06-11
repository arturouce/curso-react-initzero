function LibraryFormValidations(book) {
    var errorValidations = {}

    if(!book.isbn) {
        errorValidations.isbn = 'El campo isbn esta vacio'
    }

    if(!book.title) {
        errorValidations.title = 'El campo titulo esta vacio'
    }

    if(!book.city) {
        errorValidations.city = 'El campo ciudad esta vacio'
    }

    if(!book.author) {
        errorValidations.author = 'El campo autor esta vacio'
    }

    if(!book.publicationDate) {
        errorValidations.publicationDate = 'El año de publicación esta vacio'
    }

    if(!book.editorial) {
        errorValidations.editorial = 'El campo editorial esta vacio'
    }

    if(!book.edition) {
        errorValidations.edition = 'El campo edición esta vacio'
    }

    if(!book.numPages) {
        errorValidations.numPages = 'El número de páginas esta vacio'
    }

    if(!book.status) {
        errorValidations.status = 'El campo estatus esta vacio'
    }

    return errorValidations
}
 
export default LibraryFormValidations