
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import EditBook from './pages/EditBook'
import ViewBook from './pages/ViewBook'
import DeleteBook from './pages/DeleteBook'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/view/:id' element={<ViewBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App