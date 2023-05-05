
import React, { useEffect,useState } from "react";
import { Button,Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { Link,useParams,useNavigate } from "react-router-dom";
import {toast} from "react-toastify";


const Edit=()=>{
    const {id}=useParams();
    const dispatch =useDispatch();
    const navigate=useNavigate();
    const students=useSelector(state=>state);
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

    const [rollNum,setRollNum]=useState("");
    const [name,setName]=useState("");
    const [city,setCity]=useState("");
    const [mark1,setMark1]=useState("");
    const [mark2,setMark2]=useState("");
    const [mark3,setMark3]=useState("");
    const [mark4,setMark4]=useState("");
    const [mark5,setMark5]=useState("");
  
    const handleSubmit=(e)=>{
      e.preventDefault();
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
   
  
    return (
    <div>
      
    <div className="create">
          <h1>Update Student Mark list{id}</h1>
            <Form className="d-grid gap-2">
              <div className="orange">
            <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                 placeholder="Enter Student Roll No." required 
                 value={rollNum} 
                 onChange={(e)=>setRollNum(e.target.value)} disabled>
                </Form.Control>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" 
                placeholder="Enter Student Name" required  
                value={name} 
                onChange={(e)=>setName(e.target.value)}disabled>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 placeholder="Enter Student City" required 
                 value={city} 
                 onChange={(e)=>setCity(e.target.value)}>
                </Form.Control>
              </Form.Group></div>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 placeholder="Enter Student Mark1" required 
                 value={mark1}
                 onChange={(e)=>setMark1(e.target.value)}>
                </Form.Control>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 placeholder="Enter Student Mark2" required 
                 value={mark2}
                 onChange={(e)=>setMark2(e.target.value)}>
                </Form.Control>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 placeholder="Enter Student Mark3" required 
                 value={mark3} 
                 onChange={(e)=>setMark3(e.target.value)}>
                </Form.Control>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text"
                 placeholder="Enter Student Mark4" required 
                 value={mark4} 
                 onChange={(e)=>setMark4(e.target.value)}>
                </Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formId">
                <Form.Control type="text" placeholder="Enter Student Mark5" required 
                 value={mark5}
                 onChange={(e)=>setMark5(e.target.value)}>
                </Form.Control>
              </Form.Group>
              
             <div  className="editButtons">
              <Button className="submitBtn"  onClick={handleSubmit}  type="submit">Update</Button>
              &nbsp;
            <Link to="/studentsMarkDetails">
              <Button className="btn btn-danger" type="submit">Cancel</Button>
            </Link></div>
           </Form>
        </div>
       
    </div>
  )
}

export default Edit;