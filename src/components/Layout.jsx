import React from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

const Layout = () => {
    const navigate = useNavigate();

    const login = () => navigate('/login');
    const register = () => navigate('/register');
    const admin = () => navigate('/admin');

    const buttons = [
        { text: "Login Here", onClick: login },
        { text: "Register Here", onClick: register },
        { text: "Administrator", onClick: admin },
    ];

    return (
        <>
            <div className="text-4xl font-bold text-center my-4">Main Menu</div>
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
    );
};

export default Layout;
