import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const Edit = () => {
    const navigate = useNavigate();  
    const { eid } = useParams();
    const [values, setValues] = useState({
    name: "",
    mobile: "",
    password: ""
    
  });
  

  useEffect(() => {
    axios.get(`http://localhost/react/editemp.php?eid=${eid}`)
      .then(res => {
        const data = res.data[0];
        setValues({
          name: data.name,
          mobile: data.mobile,
          password: data.password,
          email : data.email,
          dob: data.dob
        });
      })
      .catch(err => console.log(err))
  }, [eid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSaveClick = () => {
    const dataToSave = {
      eid: eid,
      name: values.name,
      email: values.email, 
      mobile: values.mobile,
      password: values.password,
      dob: values.dob, 
    };
  
    axios.put(`http://localhost/react/Editemployee.php/${eid}`, dataToSave) 
      .then(res => {
        alert("Update Successfully");
        navigate('/AdminLogin/Adminhome');

      })
      .catch(err => console.log(err));
  };
  


  return (
    <>
      <h1>Edit Employee Details</h1>
      <table cellPadding={15}>
        <tbody>
          <tr>
            <td><label>Name:</label></td>
            <td><input type="text" name="name" value={values.name} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><label>Email:</label></td>
            <td><input type="text" name="email" value={values.email} readOnly/></td>
          </tr>
          <tr>
            <td><label>MobileNo:</label></td>
            <td><input type="text" name="mobile" value={values.mobile} onChange={handleInputChange} /></td>
          </tr>
          
          <tr>
            <td><label>Password:</label></td>
            <td><input type="password" name="password" value={values.password} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td><label>Dob :</label></td>
            <td><input type="date" name="dob" value={values.dob} readOnly/></td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
      </div>
    </>
  );
}

export default Edit;
