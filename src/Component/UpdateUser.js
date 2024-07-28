import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const UpdateUser = ()=> {
  const server = "https://noter-api-note.vercel.app/";
  const Navigate = useNavigate();
  const [user,setUser] = useState( {
      name: "", email: ""})
  const [empty,setEmpty] = useState(false)
  const HandleSubmit =async ()=> {
    try {
      if (!user.name || !user.email) {
        setEmpty(true)
        return false
      } else {
        const lsUser = JSON.parse(localStorage.getItem("nld"));
        const userId = lsUser[0].id;
        let result = await fetch(`${server}/update/user/${userId}`,{
          method:"put",
          body:JSON.stringify(user),
          headers:{
            "content-type":"application/json"
          }
        });
        result = await result.json()
        console.log(result)
        if(result.msg === "updated"){
          Navigate("/")
        }
      }
    }catch(error) {
      console.log(error)
    }
  }
  return(
    <>
      <div className="update_user">
        <h1>Update User</h1>

        <input
        type="text"
        placeholder="Updated name"
        onChange={(e)=>setUser((old)=> {
          return {
            ...old, name: e.target.value
          }
        })}
        />
        {empty && !user.name && <p className="emptyState">please enter name</p>}

      <input
      type="email"
      placeholder="update email"
      onChange={(e)=>setUser((old)=> {
        return {
          ...old, email: e.target.value
        }
      })}
      />
      {empty && !user.email && <p className="emptyState">please enter email</p>}
    <button onClick={()=>HandleSubmit()}>Update</button>
  </div>
</>
);
};
export default UpdateUser;
