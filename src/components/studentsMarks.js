import React, { useState } from 'react';
import "../App.css";
import {Button, Table} from 'react-bootstrap';
import { useSelector } from 'react-redux';


const StudentView=()=>{

  const students=useSelector(state=>state);
  
  return(
  <div>
    <h1>STUDENTS MARK LIST</h1>
    <div className='m-5'>
      <Table striped bordered hover size="sm">
         <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Roll Number</th>
            <th scope="col">Student Name</th>
            <th scope="col">City</th>
            <th scope="col">Mark1</th>
            <th scope="col">Mark2</th>
            <th scope="col">Mark3</th>
            <th scope="col">Mark4</th>
            <th scope="col">Mark5</th>
         
          </tr>
         </thead>
         <tbody>
         {
          students.map((student,id)=>(
            <tr key={id}>
              <td>{id+1}</td>
              <td>{student.rollNum}</td>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.mark1}</td>
              <td>{student.mark2}</td>
              <td>{student.mark3}</td>
              <td>{student.mark4}</td>
              <td>{student.mark5}</td>
              
            </tr>
          ))
         }
         </tbody>
      </Table>
    </div>
  </div>
 )
}

export default StudentView;