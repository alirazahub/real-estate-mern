import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPasswordPage() {
    return (
        <div className="col-md-4 mx-auto shadow loginPage">
            <h4 className='text-center fw-bold'>Reset your password</h4>
            <form action="/login">
                <div class="mb-3">
                    <label class="form-label text-right">Email address</label>
                    <input type="email" class="form-control" placeholder="name@example.com" />
                </div>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <div>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </div>
        </div>
    )
}