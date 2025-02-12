import React from 'react'
import { Link, Outlet } from 'react-router';
import { useNavigate } from 'react-router';

const Plans = () => {
    const navigate = useNavigate();

    const room = () => navigate('/room');
    const office = () => navigate('/office');
    const beach = () => navigate('/beach');

    const buttons = [
        { text: "Room Plan", onClick: room },
        { text: "Office Plan", onClick: office },
        { text: "Beach Plan", onClick: beach },
    ];

  return (
    <>
        <header className="text-4xl font-bold text-center my-4">Select Workout Plan</header>
        <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
        <div className="grid grid-cols-3 gap-4 justify-items-center">
            {buttons.map(({ text, onClick }, index) => (
                <div key={index} className="p-4 flex justify-center items-center">
                    <button onClick={onClick} className="px-4 py-2 bg-green-600 text-white rounded hover:border-blue-500 transition duration-200">
                        {text}
                    </button>
                </div>
            ))}
        </div>
        <Outlet />
    </>
  )
}

export default Plans