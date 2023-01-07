import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const url = 'http://localhost:5000';


export default function SignInPage() {
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill all the fields');
    }
    else {
      const user = {
        email,
        password
      }
      axios.post(`${url}/api/login`, user)
        .then((res) => {
            alert("Login successfully");
            setCookie('userToken',res.data.userToken, { path: '/' });
            history.push('/');
        })
        .catch((err) => {
          alert(err.response.data.message);
        })
    }
  }
  return (
    <div className="col-md-4 mx-auto loginPage shadow">
      <h2 className='text-center'>Sign in to us</h2>
      <form action="/home">
        <div class="mb-3">
          <label class="form-label text-right">Email address</label>
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" placeholder="name@example.com" />
        </div>
        <div class="mb-3">
          <label class="form-label text-right">Password</label>
          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" />
        </div>
        <Link to="/forget-password"><label className="right-label forget">Forget password?</label></Link>
        <p>
          <button onClick={handleSubmit}>Login</button>
        </p>
      </form>
      <div>
        <p>First time? <Link to="/register">Create an account</Link>.</p>
        <p><Link to="/">Back to Homepage</Link>.</p>
      </div>
    </div>
  )
}