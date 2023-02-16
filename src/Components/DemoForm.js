import "./Form.css";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function DemoForm() {
  const { register, handleSubmit} = useForm();
  const { userInfo, setuserInfo} = useState();
  const onSubmit= (data) => {
    setuserInfo(data);
    console.log(data);
  }
  return (
    <div className="form">
      <pre >{JSON.stringify(userInfo, undefined, 2)}</pre>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Register Here.</h1>
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter Username" ref={register} ></input>
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Email"  ></input>
            <label>Password</label>
            <input type="Password" name="Password" placeholder="Enter Password"></input>
            <button className="btn">Submit</button>
            </form>
    </div>
  )
}

export default DemoForm;