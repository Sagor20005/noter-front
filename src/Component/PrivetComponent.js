import React from 'react';
import {Outlet,Navigate} from 'react-router-dom';

const PrivetComponent = ()=>{
  let auth = localStorage.getItem("nld");
  return auth?<Outlet />:<Navigate to="/login"/>
}
export default PrivetComponent;