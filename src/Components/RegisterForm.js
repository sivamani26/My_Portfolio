import "./Form.css";

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterHere() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState("");
  const [userData, setUserData] = useState([])

  const Event = (e) => {
    e.preventDefault();
    // console.log({ name, email, handle });}
    let clientData = {
      name: name,
      email: email,
      handle: handle,
    };

    setName("");
    setEmail("");
    setHandle("");
    const prevData = [...userData];
    prevData.push(clientData);
    setUserData(prevData);
  };
console.log(userData);
  return (
    <div className="form">
      <form>
        <label>Enter User name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="username"
          placeholder="Enter Username"
          value={name}
        ></input>
        <label>Enter Your Email</label>
        <input
         
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="Enter Email"
          value={email}
        ></input>
        <label>Password</label>
        <input
          
          type="Password"
          onChange={(e) => setHandle(e.target.value)}
          name="Password"
          placeholder="Enter Password"
          value={handle}
        ></input>
        <button className="btn" onClick={Event}>Submit</button> <br />
        <Link to="/BookADemo">
          <button className="btn">Already a member? Click Here </button>
        </Link>

        <div>
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Password</td>
            </tr>
          </thead>

          <tbody>
            {userData.map((clientData, index) => {
              console.log(clientData, index, "loop  ");
              return (
                <tr key={index}>
                  <td>{clientData.name}</td>
                  <td>{clientData.email}</td>
                  <td>{clientData.handle}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </form>

      
    </div>
  );
}

export default RegisterHere;
