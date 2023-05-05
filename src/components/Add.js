import React, {useState} from "react";
import { Button,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import ValidatorAdd from "../components/validatorAdd";

const Add=()=>{
  const [err,setErr]=useState({});
  const [rollNum,setRollNum]=useState("");
 const [name,setName]=useState("");
 const [city,setCity]=useState("");
 const [mark1,setMark1]=useState("");
 const [mark2,setMark2]=useState("");
 const [mark3,setMark3]=useState("");
 const [mark4,setMark4]=useState("");
 const [mark5,setMark5]=useState("");
 const students=useSelector((state)=>state);
 const dispatch =useDispatch();
 const navigate=useNavigate();
 console.log(students);
 
const handleSubmit=(e)=>{
e.preventDefault();

if(!rollNum||!name||!city||!mark1||!mark2||!mark3||!mark4||!mark5){
  setErr(ValidatorAdd(rollNum,name,city,mark1,mark2,mark3,mark4,mark5))
}
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
return (
  
    <div>
 <div className="create">
          <h1>Create New Student Mark list</h1>
            <Form className="d-grid gap-2">
              
             <Form.Group className="mb-3" controlId="formId">
                <Form.Control 
                 type="text" 
                 name="rollNum"
                 placeholder="Enter Student Roll No." required 
                 value={rollNum} 
                 onChange={(e)=>setRollNum(e.target.value)} >
            </Form.Control>
            {err.rollNum&&rollNum.length<=0?<p className="error">{err.rollNum}</p>:""}
           </Form.Group>
                 <Form.Group className="mb-3" controlId="formId">
                 <Form.Control type="text" 
                   name="name" 
                   placeholder="Enter Student Name" required 
                   
                   value={name} onChange={(e)=>setName(e.target.value)}>
                 </Form.Control>
                 {err.name&&name.length<=0?<p className="error">{err.name}</p>:""}
              
                 </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 name="city" placeholder="Enter Student City" required 
                 value={city} 
                 onChange={(e)=>setCity(e.target.value)}>
                </Form.Control>
                {err.city&&city.length<=0?<p className="error">{err.city}</p>:""}
              
                 </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 name="mark1"
                 placeholder="Enter Student Mark1" required 
                 value={mark1} 
                 onChange={(e)=>setMark1(e.target.value)}>
                </Form.Control>
                {err.mark1&&mark1.length<=0?<p className="error">{err.mark1}</p>:""}
                </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                name="mark2" placeholder="Enter Student Mark2" required 
                value={mark2} 
                  onChange={(e)=>setMark2(e.target.value)}>
                </Form.Control>
                {err.mark2&&mark2.length<=0?<p className="error">{err.mark2}</p>:""}
              
               </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                name="mark3" 
                placeholder="Enter Student Mark3" required 
                value={mark3} 
                onChange={(e)=>setMark3(e.target.value)}>
                </Form.Control>
                {err.mark3&&mark3.length<=0?<p className="error">{err.mark3}</p>:""}
              
                  </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                name="mark4" placeholder="Enter Student Mark4" required
                value={mark4} 
                onChange={(e)=>setMark4(e.target.value)} >
                </Form.Control>
                {err.mark4&&mark4.length<=0?<p className="error">{err.mark4}</p>:""}
             
               </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 name="mark5" placeholder="Enter Student Mark5" required 
                 value={mark5} 
                 onChange={(e)=>setMark5(e.target.value)}>
                </Form.Control>
                {err.mark5&&mark5.length<=0?<p className="error">{err.mark5}</p>:""}
             
                </Form.Group>

              <Button className="submitBtn"  type="submit" onClick={handleSubmit}>Submit</Button>
            </Form>
        </div>
    </div>
  )
}

export default Add;