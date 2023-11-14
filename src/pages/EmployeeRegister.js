import axios from 'axios';
import { useState } from "react";

const EmployeeRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [dob, setDob] = useState(''); 

    const submit = () => {
        if (name.length === 0) {
            document.getElementById("A").innerHTML = "please fill name";
            document.getElementById("A").style.color = "red";
        } else if (email.length === 0) {
            document.getElementById("B").innerHTML = "please fill email";
            document.getElementById("B").style.color = "red";
        } else if (mobile.length === 0) {
            document.getElementById("C").innerHTML = "please fill mobile";
            document.getElementById("C").style.color = "red";
        } else if (password.length === 0) {
            document.getElementById("D").innerHTML = "please fill password";
            document.getElementById("D").style.color = "red";
        } else {
            const location = "http://localhost/react/register.php";
            let data = new FormData();
            data.append("n", name);
            data.append("e", email);
            data.append("p", password);
            data.append("m", mobile);
            data.append("d", dob);
            axios.post(location, data)
                .then(response => alert(response.data))
                .catch(error => alert(error));
        }
    }

    return (
        <>
            <h1>Employee Registration</h1>
            <table cellPadding={7}>
                <tr>
                    <td><label>Name:</label></td>
                    <td><input type="text" name={name} onChange={(e) => setName(e.target.value)} placeholder='enter name' /></td>
                </tr>
                <tr>
                    <td colSpan={2}><div id='A'></div></td>
                </tr>
                <tr>
                    <td><label>Email:</label></td>
                    <td><input type="text" name={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter email' /></td>
                </tr>
                <tr>
                    <td colSpan={2}><div id='B'></div></td>
                </tr>
                <tr>
                    <td><label>Password:</label></td>
                    <td><input type="password" name={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter password'/></td>
                </tr>
               <tr>
                <td colSpan={2}><div id='D'></div></td>
               </tr>
                <tr>
                    <td><label>Mobile:</label></td>
                    <td><input type="text" name={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='enter mobilenumber' /></td>
                </tr>
               <tr>
                <td colSpan={2}> <div id='C'></div></td>
               </tr>
                <tr>
                    <td><label>DOB:</label></td>
                    <td><input type="Date" value={dob} onChange={(e) => setDob(e.target.value)} /></td>
                </tr>
            
        </table>
        <div className='text-center'>
        <button onClick={submit} type="button" className="btn btn-primary" id='btn' >Register</button>

        </div>
        </>
    );
}

export default EmployeeRegister;

