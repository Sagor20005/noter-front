import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import Notes from './Component/Notes';
import NavMenu from './Component/NavMenu'
import Login from './Component/Login'
import Signup from './Component/Signup'
import AddNote from './Component/AddNote'
import UpdateUser from './Component/UpdateUser'
import Footer from './Component/Footer'
import UpdateNote from './Component/UpdateNote'
import ResetPass from './Component/ResetPass'
import CodeSubmit from './Component/CodeSubmit'
import PrivetComponent from './Component/PrivetComponent'

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Nav />
          <Routes>
            
            <Route element={<PrivetComponent />}>
            <Route path="/" element={<Notes />} />
            <Route path="/menu" element={<NavMenu />} />
            <Route path="/add" element={<AddNote />}/>
            <Route path="/update/user" element={<UpdateUser />}/>
            <Route path="/update/note/:id/:titel/:dis" element={<UpdateNote />}/>
            </Route>
            
            <Route path="/login" element={<Login />} />
            <Route path="/reset/password" element={<ResetPass />}/>
            <Route path="/code/submit" element={<CodeSubmit />}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;