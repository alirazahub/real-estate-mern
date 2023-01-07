import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const url = 'http://localhost:5000'


export default function SignUpPage() {
    const history = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [contact, setContact] = useState('')
    const [username, setUsername] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            contact,
            username
        }
        try {
            const response = await axios.post(`${url}/api/register`, user);
            alert(response.data.message);
            setName('');
            setEmail('');
            setPassword('');
            setContact('');
            setUsername('');
        } catch (err) {
            alert(err.response.data.message);
        }
    }
    return (
        <div className="col-md-4 mx-auto shadow loginPage">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br />
                    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" required />
                </p>
                <p>
                    <label>Email address</label><br />
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" required />
                </p>
                <p>
                    <label>Name</label><br />
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" required />
                </p>
                <p>
                    <label>Contact</label><br />
                    <input value={contact} onChange={(e)=>{setContact(e.target.value)}} type="text" required />
                </p>
                <p>
                    <label>Password</label><br />
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" required />
                </p>
                <p>
                    <input style={{ width: '30px', cursor: 'pointer' }} type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button onClick={handleSubmit}>Register</button>
                </p>
            </form>
            <div>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </div>
        </div>
    )

}
