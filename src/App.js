import logo from './logo.svg';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Homepage';
//import UserLogin from './Components/UserLogin';
import Signup from './Components/signup';
import Form from './Components/addItem';
import Edit from  './Components/editItem';
import AdminTable from './Components/Table';
import UserTable from './Components/UserTable';

const App = () => {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login" element = {<AdminLogin/>}/>
        
        <Route path= "/signup" element = {<Signup/>}/>
        <Route path="/data" element = {<AdminTable/>}/>
        <Route path="/usertable" element = {<UserTable/>}/>
        <Route path="/edit/:itemName" element = {<Edit/>}/>
        <Route path="/add" element = {<Form/>}/>
      </Routes>
    </BrowserRouter>
   );
}
 
export default App;

