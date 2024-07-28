import React,{useEffect,useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'

const NavMenu =()=>{
  const Navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem("nld"))
  console.log(user)
  return(
    <>
      <div className="navMenu">
        <h1>Profile</h1>
        <div className="userInfo" >
          <h3>Name : {user[0].name}</h3>
          <h3>Email: {user[0].email}</h3>
          <h3>User Id : {user[0].id}</h3>
        </div>
        <div className="navActions">
          <ul>
            <li>
              <Link to="/update/user">Update informatiin</Link>
            </li>
            <li>
              <Link to="/" onClick={()=>{
              localStorage.clear()
              }}>Logout account</Link>
            </li>
            <li>
              <Link to="/users">Count Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
    );
};
export default NavMenu;