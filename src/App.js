
import './App.css';
import Login from './pages/Login';
import Add from './components/Add';
import Edit from './components/Edit';
import StudentTable from './components/StudentTable';
import MatTable from './components/MatTable';
import Tab from './components/Tab'
import AddEdit from './components/AddEdit'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentView from './components/studentsMarks';
import PrivateRoute from './PrivateRoutes/PrivateRoute';


function App() {
  
  return (
    <div>
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
      <Route exact path="/login" element={<Login/>} />
     <Route element={<PrivateRoute />}>
        <Route exact path="/studentsMarkDetails" element={<StudentTable/>} />
        <Route path="/create" element={<Add/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      
     </Route>
     
      <Route path="/studentsMarks" element={<StudentView/>}/>
      <Route path="/MatTable" element={<MatTable/>}/>
      <Route path="/Tab" element={<Tab/>}/>
      <Route path="/addEdit"  element={<AddEdit/>}></Route>
      <Route path="/addEdit/:id"  element={<AddEdit/>}></Route>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
