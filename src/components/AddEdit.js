import { TurnedInNot } from "@material-ui/icons";
import React, {useEffect, useState} from "react";
import { Button,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link ,useParams} from "react-router-dom";
import {toast} from "react-toastify";
import { useLocation } from 'react-router-dom'

import ValidatorAdd from "../components/validatorAdd";
const AddEdit=()=>{
  const {id}=useParams();
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const [err,setErr]=useState({});
  const location = useLocation()
  const [rollNum,setRollNum]=useState("");
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const [mark1,setMark1]=useState("");
  const [mark2,setMark2]=useState("");
  const [mark3,setMark3]=useState("");
  const [mark4,setMark4]=useState("");
  const [mark5,setMark5]=useState("");
 
const {create,edit}=location.state;
console.log(create);
console.log(edit);
if(create){
  console.log("create is true");
}else if(edit){
  console.log("Edit is true");
}
const students=useSelector((state)=>state);
 const currentStudent=students.find(student=>student.id===parseInt(id));
 console.log(currentStudent)
 useEffect(()=>{
  if (currentStudent){
   setRollNum(currentStudent.rollNum);
   setName(currentStudent.name);
   setCity(currentStudent.city);
   setMark1(currentStudent.mark1);
   setMark2(currentStudent.mark2);
   setMark3(currentStudent.mark3);
   setMark4(currentStudent.mark4);
   setMark5(currentStudent.mark5);
  }
},[currentStudent]);
console.log(currentStudent)
const handleSubmit=()=>{
   const studData={
      id : students[students.length-1].id+1,
      rollNum,
      name,
      city,
      mark1,mark2,mark3,mark4,mark5
    }
    dispatch({type:"Add_Student",payload:studData});
    toast.success(`Student ${name} added Successfully!!`);
    navigate("/studentsMarkDetails");
    };
    
    const handleUpdate=()=>{
      if(!rollNum||!name||!city||!mark1||!mark2||!mark3||!mark4||!mark5){
       return toast.warning("please fill in all fields")
     }
   
 const studData={
   id :parseInt(id),
   rollNum,
   name,
   city,
   mark1,mark2,mark3,mark4,mark5
 }
 dispatch({type:"UPDATE_STUDENT",payload:studData});
 toast.success(`Student ${name} Mark List updated Successfully!!`);
 navigate("/studentsMarkDetails");
  };
  const handleSubmitUpdate=()=>{
    setErr(ValidatorAdd(rollNum,name,city,mark1,mark2,mark3,mark4,mark5))
    if(create){
     
      handleSubmit();
    }else if(edit){
      
      handleUpdate();
    }
  }
    return (
      <div>
   
       <div className="create">
          <h1>{edit?"Update Student Marks List":"Create New Student Mark List"}</h1>
            <Form className="d-grid gap-2">
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                  name="rollNum"
                  placeholder="Enter Student Roll No." required 
                  value={rollNum} 
                  onChange={(e)=>setRollNum(e.target.value)}>
                </Form.Control>
                {console.log(create)}
                {create?(err.rollNum&&rollNum.length<=0?<p className="error">{err.rollNum}</p>:""):""}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                  name="name" 
                  placeholder="Enter Student Name" required 
                  value={name} onChange={(e)=>setName(e.target.value)}>
                </Form.Control>
                {create?(err.name&&name.length<=0?<p className="error">{err.name}</p>:""):""}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                  name="city"
                  placeholder="Enter Student City" required
                  value={city} 
                 onChange={(e)=>setCity(e.target.value)}>
                </Form.Control>
                {create?(err.city&&city.length<=0?<p className="error">{err.city}</p>:""):""}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                  name="mark1"
                  placeholder="Enter Student Mark1" required
                  value={mark1} 
                 onChange={(e)=>setMark1(e.target.value)}>
                </Form.Control>
                {create?(err.mark1&&mark1.length<=0?<p className="error">{err.mark1}</p>:""):""}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                  name="mark2" 
                  placeholder="Enter Student Mark2" required
                  value={mark2} 
                  onChange={(e)=>setMark2(e.target.value)}>
                </Form.Control>
                {create==true?(err.mark2&&mark2.length<=0?<p className="error">{err.mark2}</p>:""):""}
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                  name="mark3" 
                  placeholder="Enter Student Mark3" required 
                  value={mark3} 
                onChange={(e)=>setMark3(e.target.value)}>
               </Form.Control>
               {create?(err.mark3&&mark3.length<=0?<p className="error">{err.mark3}</p>:""):""}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                  name="mark4"
                  placeholder="Enter Student Mark4" required
                  value={mark4} 
                  onChange={(e)=>setMark4(e.target.value)}>
                </Form.Control>
                {create?(err.mark4&&mark4.length<=0?<p className="error">{err.mark4}</p>:""):""}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 name="mark5" 
                 placeholder="Enter Student Mark5" required 
                 value={mark5} 
                 onChange={(e)=>setMark5(e.target.value)}>
                </Form.Control>
                {create?(err.mark5&&mark5.length<=0?<p className="error">{err.mark5}</p>:""):""}
              </Form.Group>
              <div  className="editButtons">
               <Link to="/studentsMarkDetails">
               <Button className="submitBtn mx-2" onClick={handleSubmitUpdate}  type="submit">Submit</Button>
               <Button className="btn btn-danger" type="submit" >Cancel</Button>
            </Link></div>
            </Form>
        </div>
       
      </div>
    )
}

export default AddEdit;