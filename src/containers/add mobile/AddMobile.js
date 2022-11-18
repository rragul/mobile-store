import React, {useState} from 'react'
import "./form.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddMobile() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("");
  let navigate = useNavigate(); 

  const notify = () => toast.success('Add Successfully', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  function addMobile(event){
    event.preventDefault();
    console.log(name, price, url);
    axios.post("https://mobile-api.onrender.com/addMobile",{
      name: name,
      price: price,
      img: url
    })
    .then((res)=> {
      setName('');
      setPrice('');
      setUrl('');
      notify();
      navigate('/');
    })
  }
  return (
    <div className='form'>
      <h1>Add Mobile</h1>
      <form onSubmit={addMobile}>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Mobile Name' className='field' required/>
        <input type='text' value={price} onChange={(e)=> setPrice(e.target.value)} placeholder='Price' className='field' required/>
        <input type='text' value={url} onChange={(e)=> setUrl(e.target.value)} placeholder='URL' className='field' required/>
        <input type="submit" className='button' value='ADD' />
      </form>
      <ToastContainer />
    </div>
  )
}
