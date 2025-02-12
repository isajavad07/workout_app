import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword || !dob || !gender) {
            alert('Please ensure every field is complete!');
        } else if (password.length < 8) {
            alert('Password must be at least 8 characters');
        } else if (password !== confirmPassword) {
            alert('Passwords must match');
        } else {
            axios.post('http://localhost:8081/register', {firstName, lastName, phone, email, password, dob, gender})
            .then(res => {
                console.log("Registered Successfully");
                navigate('/login');
            })
            .catch(err => console.log(err));
        }

        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setDob('');
        setGender('');
    };

    return (
        <div className="container mx-auto my-8 p-6 bg-white rounded shadow max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Register</h1>
            <form className="form-control space-y-4" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="firstName" className="block mb-1">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="lastName" className="block mb-1">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={lastName}
                        onChange={(e) => setLastName(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input type="text" id="email" name="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="phoneNum" className="block mb-1">Phone Number:</label>
                    <input type="text" id="phoneNum" name="phoneNum" value={phone}
                        onChange={(e) => setPhone(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1">Password:</label>
                    <input type="password" id="password" name="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="confirmPassword" className="block mb-1">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="dob" className="block mb-1">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" min="1990-01-01" max="2007-01-31" value={dob}
                        onChange={(e) => setDob(e.target.value)} className="w-full p-2 border rounded" />
                </div>
                <div>
                    <label htmlFor="gender" className="block mb-1">Gender:</label>
                    <select id="gender" name="gender" value={gender}
                        onChange={(e) => setGender(e.target.value)} className="w-full p-2 border rounded">
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-green-900 text-white rounded hover:bg-green-600 transition duration-200">Register Account</button>
            </form>
            <Link to="/login" className="block mt-4 text-blue-500 hover:underline">Already have an account? Login Here!</Link>
        </div>
    );
};

export default Register;
