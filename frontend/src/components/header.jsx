import React, { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Logo from '../assets/logoMain.png';
import NotiBell from '../assets/Bell_pin.png';
import UserImg from '../assets/User_cicrle.png';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const { email } = useContext(AuthContext);
    const [showDialog, setShowDialog] = useState(false);

    const title = path.includes('admin/dashboard/govscheme')
    ? 'Schemes'
    : path.includes('admin/dashboard')
        ? 'Dashboard'
        : path.includes('report')
            ? 'Report'
            : path.includes('alert')
                ? 'Alerts'
                : path.includes('staff')
                    ? 'Staff'
                    : '';


    function handleClick() {
        navigate('/admin/dashboard');
    }

    function toggleDialog() {
        setShowDialog(prev => !prev);
    }

    return (
        <div className='m-10 relative'>
            <ul className='flex justify-between'>
                <li>
                    <img src={Logo} alt="Logo" className="w-20 h-20 object-contain cursor-pointer" onClick={handleClick}/>
                </li>
                <li className='text-2xl font-semibold mt-4'>
                    {title}
                </li>
                <li className='mt-4'>
                    <input type="text" placeholder='Search' className='p-1 bg-slate-200 pl-16 pr-16 rounded-3xl text-center'/>
                </li>
                <li className='relative'>
                    <img
                        src={NotiBell}
                        alt="Notification Bell"
                        className="w-10 h-10 object-contain cursor-pointer mt-4"
                        onClick={toggleDialog}
                    />
                    {showDialog && (
                        <div
                            className="absolute left-[-8.6vw] top-12 w-[20vw] h-[40vh] p-4 z-10"
                            style={{

                                filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3))'
                            }}
                        >
                            <div
                                className="w-full h-full p-4 bg-white rounded-xl"
                                style={{
                                    clipPath: 'polygon(50% 0%, 100% 6%, 100% 100%, 0% 100%, 0 6%)'
                                }}
                            >
                                <p className="text-sm text-center font-medium">Notifications</p>
                               
                                
                            </div>
                        </div>
                    )}
                </li>
                <li className='flex'>
                    <img src={UserImg} alt="User Profile" className="w-10 h-10 object-contain cursor-pointer mt-4" />
                    <span className='mt-3 font-semibold p-2 text-lg'>{email}</span>
                </li>
            </ul>
        </div>
    );
}

export default Header;
