import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


const AddNote = ()=> {
  const server = "https://noter-api-note.vercel.app/";
  const Navigate = useNavigate()
  const [note,setNote] = useState( {
      titel: "", discription: "", userId: ""
    });
  const [empty,setEmpty] = useState(false)
  useEffect(()=> {
    let userId = JSON.parse(localStorage.getItem("nld"))
    setNote((old)=> {
      return {
        ...old, userId: userId[0].id
      }
    });
  }, [])

  const HandleNote = async ()=> {
    try{
      if(!note.titel || !note.discription || !note.userId){
        setEmpty(true);
        return false
      }else{
        let result = await fetch(`${server}/add`,{
          method:"post",
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
        <h1>Add Note</h1>
        <label>Write Titel</label>
        <textarea
          onChange={(e)=>setNote((old)=> {
            return {
              ...old, titel: e.target.value
            }
          })}
          ></textarea>
          {empty && !note.titel && <p className="emptyState">Please enter titel</p>}
          
        <label>Write Discription</label>
        <textarea className="dis"
          onChange={(e)=>setNote((old)=> {
            return {
              ...old, discription: e.target.value
            }
          })}
          ></textarea>
          {empty && !note.discription && <p className="emptyState">Please enter discription</p>}
          
        <button className="btn" onClick={()=>HandleNote()}>Add</button>
      </div>
    </>
  );
};
export default AddNote;
