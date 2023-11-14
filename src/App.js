import './App.css';
import Carousel from './pages/Home';
import EmployeeLogin from './pages/EmployeeLogin';
import EmployeeRegister from './pages/EmployeeRegister';
import AdminLogin from './pages/AdminLogin';
import { Adminhome } from './pages/adminhome';
import Navbar from './pages/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './pages/Editemployeedetails';
import Mydetails from './pages/Mydetails';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Navbar/>}></Route>
        <Route index element={<Carousel/>}></Route>
        <Route path='login' element= {<EmployeeLogin/>}></Route>
        <Route path='admin' element= {<AdminLogin/>}></Route>
        <Route path='register' element={<EmployeeRegister/>}></Route>
        <Route path='/AdminLogin/Adminhome' element={<Adminhome/>}></Route>
        <Route path='/edit/:eid' element={<Edit/>}></Route>
        <Route path="/Mydetails" element={<Mydetails/>}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
