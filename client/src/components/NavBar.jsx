import React, { useState, useEffect } from 'react'
import image from '../images/logo.png'
import Link from "react-router-dom/Link";
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function NavBar() {
    // Getting pathname from the url
    const location = useHistory().location;
    const history = useHistory()
    const path = location.pathname;
    var none = '';
    if (path === '/login' || path === '/register') {
        none = 'd-none';
    }
    const url = 'http://localhost:5000';
    // eslint-disable-next-line
    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);

    const [isLogedIn, setIsLogedIn] = useState(false)
    useEffect(() => {
        axios.get(`${url}/api/profile`, {
            headers: {
                'userToken': cookies.userToken
            }
        }).then(res => {
            setIsLogedIn(true)
        }
        ).catch(err => {
            console.log(err);
            setIsLogedIn(false)
        }
        )
    }, [cookies.userToken])
    const handleLogout = (e) => {
        e.preventDefault();
        alert('Logout successfully')
        setIsLogedIn(false)
        removeCookie('userToken')
        history.push('/login')
    }
    return (
        <div className='navBAR'>
            <nav class=" navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img src={image} alt="Logoimggggg" style={{ width: "200px", marginRight: "20px" }} />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/price-predition">Price Predition</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contractors">Property Inspectors</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    S/B/R
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/sell">Sell</Link></li>
                                    <li><Link class="dropdown-item" to="/buy">Buy</Link></li>
                                    <li><Link class="dropdown-item" to="/rent">Rent</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to='/about'>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to='/contact'>Contact Us</Link>
                            </li>
                            {isLogedIn && <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to='/admin'>Admin Rights</Link>
                            </li>}
                            
                        </ul>
                        <form class="d-flex">
                            {isLogedIn ? <Link onClick={handleLogout} className={`btn btn-outline-success fw-bold`} >Log out</Link> : <Link to="/login" className={`${none} btn btn-outline-success fw-bold`} >Login</Link>}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar