import React,{useState} from 'react';

const CodeSubmit = ()=>{
  const[code,setCode]=useState()
  const[empty,setEmpty]=useState(false)
  const HandleSubmit = ()=>{
    try{
      if(!code){
        setEmpty(true)
        return false
      }else{
        console.log("ok")
      }
    }catch(error){
      console.log(error)
    }
  }
  return(
    <>
      <div className="login">
        <h1>Submit code</h1>
        <input 
        type="text"
        value={code}
        placeholder="Enter code"
        onChange={(e)=>setCode(e.target.value)}
        />
        {empty && !code && <p className="emptyState">Please enter email</p>}
        <button onClick={()=>HandleSubmit()}>Submit Code</button>
      </div>
    </>
    );
};
export default CodeSubmit;