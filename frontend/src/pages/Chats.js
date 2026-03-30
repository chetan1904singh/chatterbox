import {React,useEffect,useState} from 'react'
import axios from 'axios' 
const Chats = () => {
  const [state,setState]=useState([])
    const fetchChats= async ()=>{
      const {data}= await axios.get('/api/chats');
     console.log(data);
     setState(data);
    }
   useEffect(()=>{
    fetchChats();
   },[])
  return(
    <div>{state}</div>
  )
  
}

export {Chats}