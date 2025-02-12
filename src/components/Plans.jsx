import React from 'react'
import { Link, Outlet } from 'react-router';
import { useNavigate } from 'react-router';

const Plans = () => {
    const navigate = useNavigate();

    const room = () => navigate('/room');
    const office = () => navigate('/office');
    const beach = () => navigate('/beach');

    const buttons = [
        { 
            text: "Room Plan",
            image: "src/assets/room.jpg",
            description: "Workouts to do within your room/space", 
            onClick: room 
        },
        { 
            text: "Office Plan",
            image: "src/assets/office.jpg",
            description: "Workouts to do within your office space", 
            onClick: office 
        },
        { 
            text: "Beach Plan",
            image: "src/assets/beach.jpg", 
            description: "Workouts to do outdoors at the beach", 
            onClick: beach 
        },
    ];

  return (
    <>
        <div className="flex p-4 w-full rounded-lg text-4xl font-bold text-center justify-center my-4 shadow-2xl bg-gray-200">Select Workout Plan</div>
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        <div className="grid grid-cols-3 gap-4 justify-center mb-5">
            {buttons.map(({ text, image, description, onClick }, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-green-500 p-4">
                    <div className="flex font-bold text-xl justify-center mb-2">{text}</div>
                    <img className="w-70 h-50 aspect-square object-cover rounded-xl shadow-2xl" src={image} alt="Workout Type"></img>
                    <div className="text-gray-700 text-base mt-5">{description}</div>
                    <div className="p-4 flex justify-center items-center">
                        <button onClick={onClick} className="px-4 py-2 w-full border bg-green-600 text-white rounded hover:border-blue-500 cursor-pointer transition duration-200">
                            Select Plan
                        </button>
                    </div>
                </div>
            ))}
        </div>
        <Outlet />
    </>
  )
}

export default Plans
