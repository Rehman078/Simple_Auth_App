import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    };

    return (
<div className="container-fluid bg-login padding-top px-4 pt-5">
  <form onSubmit={handleSubmit}>
    <div className="row justify-content-center  mt-md-0">
      <div className="col-md-4 login-form ">
        <h2 className="pt-2 pb-2 text-white">Login</h2>
        <div className="input-field pt-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Enter your email</label>
        </div>
        <div className="input-field pt-3 pb-2">
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Enter your password</label>
        </div>
        <div className="row">
          <div className="col-6">
          </div>
          <div className="col-6 pt-3">
            <a href="#">Forgot password?</a>
          </div>
        </div>
        <div className="d-grid btn-login mt-4 mx-3">
          <button type="submit" className="btn py-2">Login</button>
        </div>
        <div className="register pt-4 pb-2">
          {/* <p className="text-white">Don't have an account? <a  >Register</a></p> */}
        </div>
      </div>
    </div>
  </form>
</div>

    );
}

export default Login;
