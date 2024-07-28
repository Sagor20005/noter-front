import React, {useState,useEffect} from 'react';
import {useNavigate,useParams} from 'react-router-dom'

const UpdateNote = ()=> {
  const server = "http://localhost:2000";
  const {id,titel,dis} = useParams()
  console.log(id,titel,dis)
  const Navigate = useNavigate()
  const [note,setNote] = useState( {
      titel: titel, discription: dis
    });
  const [empty,setEmpty] = useState(false)
  
  const HandleNote = async ()=> {
    try{
      if(!note.titel || !note.discription){
        setEmpty(true);
        return false
      }else{
        let result = await fetch(`${server}/update/note/${id}`,{
          method:"put",
          body:JSON.stringify(note),
          headers:{
            "content-type":"application/json"
          }
        });
        result = await result.json();
        if(result){
          console.log(result)
          Navigate("/");
        }
      }
    }catch(error){
      console.log(error)
    };
  }
  return(
    <>
      <div className="add_note adnf">
        <h1>Update Note</h1>
        <label>Update Titel</label>
        <textarea
        value={note.titel}
          onChange={(e)=>setNote((old)=> {
            return {
              ...old, titel: e.target.value
            }
          })}
          ></textarea>
          {empty && !note.titel && <p className="emptyState">Please enter titel</p>}
          
        <label>Update Discription</label>
        <textarea className="dis"
        value={note.discription}
          onChange={(e)=>setNote((old)=> {
            return {
              ...old, discription: e.target.value
            }
          })}
          ></textarea>
          {empty && !note.discription && <p className="emptyState">Please enter discription</p>}
          
        <button className="btn" onClick={()=>HandleNote()}>Update</button>
      </div>
    </>
  );
};
export default UpdateNote;