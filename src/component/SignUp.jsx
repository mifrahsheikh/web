import React from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const yourname = useRef();
  const yourpassword = useRef();
  const navigate = useNavigate();

  const SubmitHandler = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        username: yourname.current.value,
        password: yourpassword.current.value,
      });

      const { token } = response.data;
      localStorage.setItem('token', token); 
      navigate("/myprofile");
      alert("Signup successful!");
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className="signin-container">
      <h1 className="signin-title">Sign Up</h1>
      <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input type="text" id="username" ref={yourname} className="form-input" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={yourpassword} className="form-input" />
      </div>
      <button className="signin-button" onClick={SubmitHandler}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
