import axios from "axios";
import { useState } from "react";
// import {  useNavigate } from "react-router-dom";

const EmployeeLogin =() => {
  
    const [email,setEmail]=useState('');
    const [password,setpassword]=useState('');
    // const navigate = useNavigate();
    
    const submit=()=>{
        
         if (email.length === 0){
            document.getElementById("B").innerHTML="please fill email" ;
            document.getElementById("B").style.color ="red";  
        }
       
        else if (password.length === 0){
            document.getElementById("C").innerHTML="please fill password" ;
            document.getElementById("C").style.color ="red";  
        }
        
        
        else{
            
            const location ="http://localhost/react/login.php";
            let data = new FormData();
            data.append("email",email);
            data.append("password",password);
            axios.post(location,data).then(response =>{
                console.log(response.data);
                if(response.data.message === "Login Success"){
                    alert("Login Success");
                    // navigate(`/Mydetails`);
                    
                }
                else{
                    alert("Login failed");
                    
                }
            })
            .catch(error => alert(error));
        }
                
        
    }
    return(
      <>
        <h1>Employee Login</h1>
       
            <table cellPadding={7}>
               
                <tr>
                    <td><label>Email:</label></td>
                    <td><input type="text" value={email}onChange={(e)=>setEmail(e.target.value)}placeholder="enter email"></input></td>
                
                </tr>
                <tr>
                <td colSpan={2}><div id='B'></div></td>

                </tr>
                

                <tr>
                    <td><label>Password:</label></td>
                    <td><input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}placeholder="enter password"></input></td>
                    
                </tr>
                <tr>
                  <td colSpan={3}><div id='C'></div></td>
                </tr>
            </table>
            <div className="text-center">
            <button onClick={submit} type="button" class="btn btn-primary" id="btn">Login</button>
            </div>


      </>
    );
}
export default EmployeeLogin;