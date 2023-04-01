import "./Form.css";

import React from 'react';
// import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
// import RegisterForm from  "../Components/RegisterForm";

function DemoForm() {
  // const { register, handleSubmit} = useForm();
  // const { userInfo, setuserInfo} = useState();
  // const onSubmit= (data) => {
  //   setuserInfo(data);
  //   console.log(data);
  // }
  return (
    <div className="form">
        <form>
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter Username"></input>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Email"  ></input>
            <label>Password</label>
            <input type="Password" name="Password" placeholder="Enter Password"></input>
            <button className="btn">Login</button> <br />

            <Link to="/RegisterForm">
            <button className="btn">New Client? Rigister Here</button>
        </Link>
        
            </form>
    </div>
  )
}

export default DemoForm;