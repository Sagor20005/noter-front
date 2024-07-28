import React, {
  useState
} from 'react';
import {
  useNavigate
} from 'react-router-dom'

const Signup = ()=> {
  const server = "http://localhost:2000";
  const Navigate = useNavigate();
  const[user,
    setUser] = useState( {
      name: "", email: "", password: ""
    });
  const[empty,
    setEmpty] = useState(false)

  const HandleSignup = async ()=> {
    try {
      if (!user.email || !user.name || !user.password) {
        setEmpty(true)
        return false
      } else {
        let result = await fetch(`${server}/signup`, {

          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "content-type": "application/json"
          }
        })
        let respons = await result.json();
        console.log(respons)
        if (respons) {
          alert(respons.status)
          Navigate("/")
        }
      }
    }catch(error) {
      console.log(error)
    };
  };
  return(
    <>
      <div className="login">
        <h1>Signup</h1>

        <input
        type="text"
        placeholder="Enter name"
        onChange={(e)=> {
          setUser((oldData)=> {
            return {
              ...oldData, name: e.target.value
            }
          })
        }}
        />
        {empty && !user.name && <p className="emptyState">Please enter name</p>}

      <input
      type="email"
      placeholder="Enter email"
      onChange={(e)=> {
        setUser((oldData)=> {
          return {
            ...oldData, email: e.target.value
          }
        })
      }}
      />
      {empty && !user.email && <p className="emptyState">Please enter email</p>}

    <input
    type="password"
    placeholder="Enter password"
    onChange={(e)=> {
      setUser((oldData)=> {
        return {
          ...oldData, password: e.target.value
        }
      })
    }}
    />
    {empty && !user.password && <p className="emptyState">Please enter password</p>}

  <button onClick={()=>HandleSignup()}>Signup</button>

</div>
</>
)
}
export default Signup;