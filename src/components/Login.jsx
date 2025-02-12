import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    const navigate = useNavigate();

    const closeAlert = () => {
        setShowError(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', { email, password })
            .then(res => {
                console.log(res);
                navigate('/plans');
            })
            .catch(err => {
                setShowError(true);
            });
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded shadow">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            {showError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                    <span className="block sm:inline">
                        Invalid Username or Password.
                        <button className='bg-red-100 hover:bg-red-500 ml-5 rounded relative' onClick={closeAlert}><IoClose /></button>
                    </span>
                </div>
            )}
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
