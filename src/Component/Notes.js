import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
const Notes = ()=> {
  const server = "https://noter-api-note.vercel.app/";
  const Navigate = useNavigate()
  const [notes,setNotes]=useState([])
  const GetNotes = async ()=>{
    try{
      let usrId = JSON.parse(localStorage.getItem("nld"));
      let dbnotes = await fetch(`${server}/notes/${usrId[0].id}`);
      dbnotes = await dbnotes.json();
      console.log(dbnotes)
      setNotes(dbnotes)
    }catch(error){
      console.log(error)
    }
  };
  useEffect(()=>{
    GetNotes()
  },[])
  
  const DeleteNote =async (id)=>{
    try{
      let result = await fetch(`${server}/delete/note/${id}`,{method:"delete"});
      result = await result.json();
      GetNotes()
      console.log(result)
    }catch(error){
      alert("cannot delete")
      console.log(error)
    }
  }
  return(
    <>
      {
      <div className="noteAria">
        {
        notes.map((note)=> {
          return(
            <div className="notes">
              <div className="note">
                <h2>{note.titel}</h2>
                <p>
                  {note.discription}
                </p>
              </div>
              <div className="noteAction">
                
                <button onClick={()=>Navigate(`/update/note/${note.id}/${note.titel}/${note.discription}`)}>Update</button>
                
                <button
                onClick={()=>DeleteNote(note.id)}
                >Delete</button>
              </div>
            </div>
          )
        })
        }
        <button className="add_btn" onClick={()=>Navigate("/add")}>Add</button>
      </div>
      }
    </>
  );
};
export default Notes;
