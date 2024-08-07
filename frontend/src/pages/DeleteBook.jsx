import { useState} from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useSnackbar } from "notistack"
import { useNavigate, useParams } from "react-router-dom"
const DeleteBook = () => {
  const [loading,setLoading] = useState(false);
  const { enqueueSnackbar} = useSnackbar();

  const { id } = useParams();
  const navigate = useNavigate(); 
  const handleDelete= ()=>{
    setLoading(true)
    axios.delete(`http://localhost:5500/books/${id}`).then(()=>{
      setLoading(false)
      enqueueSnackbar("Data deleted", { variant: "error" ,preventDuplicate: true,autoHideDuration: 2000});

      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      alert(`An error occured ${error}`)
    })
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
      <h3 className="text-2xl">Are You Sure You want to delete this book ?</h3>

      <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDelete}>
        Confirm
      </button>
      </div>
    </div>
  )
}

export default DeleteBook