import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                console.log(res);
                navigate('/plans');
            })
            .catch(err => alert("Invalid Credentials"));
            setEmail('')
            setPassword('')
    };

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded shadow">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <form className="form-control space-y-4" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input type="text" id="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">Password:</label>
                    <input type="password" id="password" name="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-green-900 text-white rounded hover:bg-green-600 flex items-center justify-center gap-2">
                    Sign In <FaArrowRight />
                </button>
            </form>
            <Link to="/register" className="block mt-4 text-blue-500 hover:underline">Don't have an account? Register Here!</Link>
        </div>
    );
};

export default Login;
