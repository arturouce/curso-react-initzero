import { useEffect } from 'react'
import UseBooks from "../../hooks/useBooks"

const Users = () => {
    const {books} = UseBooks()

    console.log('books', books)

    return (
        <h1>
            Usuarios 2
        </h1>
    )
}
 
export default Users