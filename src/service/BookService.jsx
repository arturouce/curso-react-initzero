import axios from 'axios'

const multiplart_config = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

const BookService = () => {

    const findAllBooks = async () => {
        try { 
            const { data } = await axios(`${import.meta.env.VITE_BOOKS_API_URL}/book/all`)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    const saveBook = async (formBook) => {
        try{
            const { data } = await axios.post(`${import.meta.env.VITE_BOOKS_API_URL}/book`, formBook, multiplart_config)
            return data
        } catch(error) {
            console.log(error)
        }
    }
    
    const deleteBook = async (id) => {
        try{
            const { data } = await axios.delete(`${import.meta.env.VITE_BOOKS_API_URL}/book/id/${id}`)
            return data
        } catch(error) {
            console.log(error)
        }
    }

    const updateBook = async (formBook) => {
        try{
            const { data } = await axios.put(`${import.meta.env.VITE_BOOKS_API_URL}/book`, formBook, multiplart_config)
            return data
        } catch(error) {
            console.log(error)
        }
    }

    return {saveBook, findAllBooks, deleteBook, updateBook}
}
 
export default BookService