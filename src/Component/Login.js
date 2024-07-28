import React, {useState} from 'react';
import {useNavigate,Link} from 'react-router-dom'

const Login = ()=> {
  const server = "https://noter-api-note.vercel.app";
  const[user,setUser] = useState( {
      email: "", password: ""
    })
  const[empty,
    setEmpty] = useState(false);
  const Navigate = useNavigate();

  async function handleLogin() {
    try {
      if (!user.email || !user.password) {
        setEmpty(true)
        return false
      } else {
        let result = await fetch(`${server}/login`, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "content-type": "application/json"
          }
        });
        result = await result.json()
        if (result.length >0) {
          localStorage.setItem("nld",JSON.stringify(result));
          console.log(result)
          Navigate("/");
        }else{
          alert("user not faund")
        }
      }
    }catch(error) {
      alert("fetch faild")
      console.log(error)
    }

  };
  return(
    <>
      <div className="login">
        <h1>Login</h1>

        <input
        type="email"
        placeholder="Enter email"
        onChange={(e)=>setUser((old)=> {
          return {
            ...old, email: e.target.value
          }
        })}
        />
      {empty && !user.email && <p className="emptyState">please enter email</p>}

      <input
      type="password"
      placeholder="Enter password"
      onChange={(e)=>setUser((old)=> {
        return {
          ...old, password: e.target.value
        }
      })}
      />
      {empty && !user.password && <p className="emptyState">please enter password</p>}

    <button
      className="btn"
      onClick={()=>handleLogin()}
      >Login</button>
    <button
      className="btn"
      onClick={()=>Navigate("/signup")}>Signup
    </button>
    <br></br>
    <Link to="/reset/password">Forgate password</Link>

  </div>
</>
)
}
export default Login;
