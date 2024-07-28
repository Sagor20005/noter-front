import React from 'react'
import {useNavigate} from 'react-router-dom'
import MenuPng from './img/menu.png'

const Nav = ()=>{
  const Navigate = useNavigate()
  return(
    <>
      <div className="navbar">
        <ul>
          <li> onClick={()=>Navigate("/")}<h1>Note</h1></li>
          <li>
            <img onClick={()=>Navigate("/menu")} src={MenuPng} alt="profile"/>
          </li>
        </ul>
      </div>
    </>
    );
};
export default Nav;
