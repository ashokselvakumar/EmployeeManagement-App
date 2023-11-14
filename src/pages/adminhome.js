import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
 
export const Adminhome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get("http://localhost/react/view.php")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/react/delete.php?id=${id}`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <h1>Welcome</h1>
      <h3 className="text-center">Manage Employees Details</h3>

      <table className="table table-striped table-light mx-auto text-center w-auto">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
            <th scope="col">DOB</th>
            <th scope="col">Edit</th>
            <th scope="col">Delect</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.eid}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.password}</td>
              <td>{user.dob}</td>
              <td><button className="btn btn-success"><Link to={`/edit/${user.eid}`} className="btn1">Edit</Link></button></td>
              <td><button className="btn btn-danger"onClick={() => deleteUser(user.eid)}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
};
