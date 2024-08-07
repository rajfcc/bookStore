import { useState, useEffect } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { useSnackbar } from "notistack"

const EditBook = () => {
  const [name,setName]=useState('');
  const [author,setAuthor] = useState('');
  const [publishYear,setPublishYear]= useState('');
  const [loading,setLoading] = useState(false);
  const { id } = useParams();

  const { enqueueSnackbar} = useSnackbar();
  const navigate = useNavigate(); 
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5500/books/${id}`)
      .then((response) => {
        setName(response.data.name)
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  },[id]);
  const handleEdit= ()=>{
    const data = {
      name,
      author,
      publishYear,
    }
    setLoading(true)
    axios.put(`http://localhost:5500/books/${id}`,data).then(()=>{
      setLoading(false)
      enqueueSnackbar("Data modified", { variant: "info" ,preventDuplicate: true,autoHideDuration: 2000});
      navigate('/')
    }).catch((error)=>{
      setLoading(false)
      alert(`An error occured ${error}`)
    })
  }
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {
        loading ? (<Spinner/>):(
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Title
              </label>
              <input type="text" value={name}
              onChange={(e)=>setName(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Author
              </label>
              <input type="text" value={author}
              onChange={(e)=>setAuthor(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
              />
            </div>
            <div className="my-4">
              <label className="text-xl mr-4 text-gray-500">
                Publish Year
              </label>
              <input type="text" value={publishYear}
              onChange={(e)=>setPublishYear(e.target.value)}
              className="border-2 border-gray-500 py-2 w-full"
              />
            </div>
            <button className="p-2 bg-sky-300 m-8" onClick={handleEdit}>Save</button>
          </div>
        )
      }
    </div>

  )
}

export default EditBook