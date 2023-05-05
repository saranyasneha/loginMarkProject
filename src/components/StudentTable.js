import React, { useEffect, useState } from 'react';
import "../App.css";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {Button, Table} from 'react-bootstrap';
import {useNavigate,Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination';
import ConfirmDialog from './ConfirmDialog';
import Sort from '../components/Sort'

const TableData=()=>{
  const [sorted,setsorted]=useState({sortedField:"id",reversed:false});
  const [search,setSearch]=useState("");
  const [confirmDialog, setConfirmDialog] = useState ({isOpen:false,title:'',subTitle:''});
  const [searchColumn,setSearchColumn]=useState([]);

  const navigate = useNavigate();
  const students = useSelector(state=>state);
  const [users,setUsers]=useState(students);
  const dispatch=useDispatch();
  const usersPerPage = 5;
  const [currentPage,setCurrentPage] = useState(1)
  const numberOfTotalPages = Math.ceil(students.length/usersPerPage);
  const pages=[...Array(numberOfTotalPages+1).keys()].slice(1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const visibleStudents = students.slice(indexOfFirstUser,indexOfLastUser);
  const [viStud,setViStud]=useState([]);
  const [searchData,setSearchData]=useState([]);
  const [create,setCreate]=useState(false)
  const [edit,setEdit]=useState(false)
  console.log(students.id);
  const fetchData=()=>{
    setViStud(visibleStudents)
    setSearchData(visibleStudents)
  }
  useEffect(()=>{
    fetchData();
  },[])
  const deleteStudent=(id,name)=>{
    setConfirmDialog({
      ...confirmDialog,
      isOpen:false
    })
    dispatch({type:"DELETE_STUDENT",payload:id});
    toast.success(` ${name} is deleted from the student Mark List `);
  }
  const logoutHandler=(e)=>{
    localStorage.removeItem('Google Login')
    localStorage.removeItem('Admin Data')
    toast.success('Logged Out Successfully!!!')
    navigate('/login');
  }
  const inputOnChange=(e)=>{
    if(e.target.value==''){
      setViStud(searchData)
    }else{
      const filterResult = searchData.filter(item=>
        e.target.value == item.rollNum||item.name.toLowerCase().includes(e.target.value.toLowerCase())||
        item.city.toLowerCase().includes(e.target.value.toLowerCase()))
        setViStud(filterResult)
     } 
     }
  const onChangeFilter=(e)=>{
  setSearchColumn({
    ...searchColumn,[e.target.name]:e.target.value
  })
  console.log(searchColumn);
  console.log(students.rollNum)
  if(searchColumn.rollNum==students.rollNum){
    console.log(students.rollNum)
  }
  }
  const createBtn=()=>{
    setCreate(true)
    console.log(create);
  }
  useEffect(()=>{
    createBtn();
    editBtn();
  },[])
  const editBtn=()=>{
    setEdit(true)
  }
 
 return(
  <div className='container'>
     <div className='markSheet'><h1>STUDENT MARK LIST</h1></div>
    <div className='search-create'>
      <input type='text'
       placeholder='Search...'
       className="form-control"
       onChange={(e)=>inputOnChange(e)}
      />
  
    <Link className='create-btn' to={`/AddEdit`} state={{create}}>
      <Button className='my-3'  onClick={createBtn}>CREATE</Button>
    </Link>
    </div>
    <div>
   <Table striped bordered hover size="sm" >
      <thead>
         <Sort users={users} 
          setUsers={setUsers} 
          sorted={sorted}  search={search} setSearch={setSearch}
          setsorted={setsorted} />
      </thead>
      {visibleStudents.length>0?(visibleStudents.map((student,id)=>(
        <tbody>
            <tr>
              <td>{student.rollNum}</td>
              <td>{student.name}</td>
              <td>{student.city}</td>
              <td>{student.mark1}</td>
              <td>{student.mark2}</td>
              <td>{student.mark3}</td>
              <td>{student.mark4}</td>
              <td>{student.mark5}</td>
              <td className='actions'>
                <div className='buttons'>
                  {console.log(student.id)}
                <Link to={`/AddEdit/${student.id}`} state={{edit}}>
                  <Button className="btn btn-success" onClick={editBtn}> Edit</Button>
                </Link>   &nbsp;
                <Button type='button' onClick={()=>setConfirmDialog({
                  isOpen:true,
                  title:'Are you sure to delete?',
                  subTitle:"You can't undo this operation",
                  onConfirm:()=>{deleteStudent(student.id,student.name)}
                })
              }  className="btn btn-danger">
                  Delete
                </Button></div>
              </td>
            </tr>
         </tbody>
          ))):<tr><td></td><td></td><td></td><td></td><td className='noData'>Data Not Found</td><td></td><td></td><td></td><td></td></tr>
            }
            
        </Table>
    </div>
    <div>
    <Pagination currentPage={currentPage}
 setCurrentPage={setCurrentPage} 
 numberOfTotalPages={numberOfTotalPages} 
 pages={pages} />
    </div>
    <div className="button"><button className="btn btn-dark my-3" onClick={logoutHandler} >Logout</button>
    </div>
  <ConfirmDialog confirmDialog={confirmDialog}
  setConfirmDialog={setConfirmDialog} />
  <div>
 
  </div>
  </div>
 )
}

export default TableData;