import React from 'react';
import { Link, Navigate } from 'react-router';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const Admin = () => {
    const navigate = useNavigate();
    const [workout, setWorkout] = useState('');
    const [type, setType] = useState('');

    const postWorkout = async(e) => {
        e.preventDefault();

        const info = { workout, type };
        await fetch('http://localhost:8000/Workouts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        });
        returnHome();
    }

    const returnHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className="text-4xl font-bold my-4">Administrator</div>
            <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
            <br />
            <div className='container mx-auto my-4 bg-white p-4 border rounded'>
                <form className='form-control space-y-4' onSubmit={postWorkout}>
                    <label htmlFor="workout">Workout Name: </label>
                    <input type='text' id='workout' name='workout' value={workout}
                        onChange={(e) => setWorkout(e.target.value)} required className="block w-full p-2 border rounded" />
                    <label htmlFor='type'>Type of Workout: </label>
                    <select name="type" id="type" value={type}
                        onChange={(e) => setType(e.target.value)} required className="block w-full p-2 border rounded">
                        <option value="">Select Type</option>
                        <option>Room</option>
                        <option>Office</option>
                        <option>Beach</option>
                    </select>
                    <button type='submit' className="px-4 py-2 bg-green-900 text-white rounded hover:bg-green-600">Add workout</button>
                </form>
                <Link to='/view' className="text-blue-500 hover:underline">View all workouts</Link>
            </div>
        </>
    )
}

export default Admin;
