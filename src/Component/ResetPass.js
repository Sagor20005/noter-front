import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'

const ResetPass = ()=>{
  const Navigate = useNavigate()
  const[email,setEmail]=useState("")
  const[empty,setEmpty]=useState(false)
  const HandleSubmit = ()=>{
    try{
      if(!email){
        setEmpty(true)
        console.log("empty")
        return false
      }else{
        Navigate("/code/submit")
      }
    }catch(error){
      console.log(error)
    }
  }
  return(
    <>
      <div className="login">
        <h1>Send code from</h1>
        <input 
        type="email"
        value={email}
        placeholder="Enter valid email"
        onChange={(e)=>setEmail(e.target.value)}
        />
        {empty && !email && <p className="emptyState">Please enter email</p>}
        <button onClick={()=>HandleSubmit()}>Send Code</button>
      </div>
    </>
    );
};
export default ResetPass;