import Users from '../components/User/users'
import { BooksProvider } from '../context/BooksProvider'

const User = () => {
    return (
        <>
            <BooksProvider>
                <Users />
            </BooksProvider>
        </>
    )
}

export default User