import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Workouts = () => {
    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        const fetchWorkouts = async () => {
            const res = await fetch('http://localhost:8000/Workouts');
            const data = await res.json();
            setInfo(data);
        };

        fetchWorkouts();
    }, []);

    return (
        <>
            <h1 className="text-4xl font-bold my-4">View all Workouts</h1>
            <Link to="/admin" className="text-blue-500 hover:underline">Back to Admin</Link>
            <div className="container mx-auto my-4 p-4 bg-green-300 border rounded shadow">
                {info.length > 0 ? (
                    info.map((workout, index) => (
                        <div key={index} className="my-2 p-2 border rounded">
                            <p>Workout: {workout.workout} | Type: {workout.type}</p>
                        </div>
                    ))
                ) : (
                    <h2 className="text-2xl font-semibold">No Workouts Available Yet</h2>
                )}
            </div>
        </>
    )
}

export default Workouts;
