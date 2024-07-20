import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import React from 'react'
import '../styles/Login.css'
import { Link } from 'react-router-dom'
import bg from '../assets/2.jpg'

function Login() {
    const [data, setData] = useState({ email: '', password: '' });
	const [error, setError] = useState('');

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = 'http://localhost:5000/api/auth';
			const res = await axios.post(url, data);
			localStorage.setItem('token', res?.data?.data);
			if (res?.data?.user?.role === 'admin') {
                console.log("Admin");
				window.location.href = '/admin';
			} else {
                console.log("user");
				window.location.href = '/menu';
			}
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return (
        <div>
            <Navbar/>
            <div className='container'style={{ backgroundImage: `url(${bg})`}}>
                <div className='form'>
                    <div className='l1'>
                        <form
                            className='form_container'
                        onSubmit={handleSubmit}
                        >
                            <h1>Login to Your Account</h1>
                            <input
                                type='email'
                                placeholder='Email'
                                name='email'
                                onChange={handleChange}
                                value={data.email}
                                required
                                className='input'
                            />
                            <input
                                type='password'
                                placeholder='Password'
                                name='password'
                                onChange={handleChange}
                                value={data.password}
                                required
                                className='input'
                            />
                            <Link
                                to='/forgot-password'
                                style={{ alignSelf: 'flex-start' }}
                            >
                                <p style={{ padding: '0 15px' }}>
                                    Forgot Password?
                                </p>
                            </Link>
                            {error && (
                                <div className="error_msg">{error}</div>
                                )
                            }
                            <button type='submit' className='btn'>
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div className='r1'>
                        <h1>New Here ?</h1>
                        <Link to='/signup'>
                            <button type='button' className='btn1'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login