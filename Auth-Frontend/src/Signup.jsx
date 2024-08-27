import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/signup', {username, email, password });
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <>
  <div className="container-fluid bg-login padding-top-1 px-4 pt-5">
  <form onSubmit={handleSubmit}>
    <div className="row justify-content-center mt-5 mt-md-0">
      <div className="col-md-4 login-form ">
        <h2 className="pt-2 pb-2 text-white">Register</h2>
        <div className="input-field pt-3">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}  required />
          <label>Enter your name</label>
        </div>
        <div className="input-field pt-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label>Enter your email</label>
        </div>
        <div className="input-field pt-3">
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required />
          <label>Enter your password</label>
        </div>
        <div className="d-grid btn-login mx-3">
          <button type="submit" className="btn py-2 text-white">Register</button>
        </div>
        <div className="register pt-4">
          {/* <p className="text-white">Already have an account? <a href>Login</a></p> */}
        </div>
      </div>
    </div>
  </form>
</div>
</>
       
    );
}

export default Signup;
