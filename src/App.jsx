import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import BooksLayout from './layouts/BooksLayout'
import Books from './pages/Books'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/books" element={<BooksLayout />}>
            <Route path="all" element={<Books />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
