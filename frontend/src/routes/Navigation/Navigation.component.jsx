import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import Contact from '../../assets/Phone@3x.png'
import NavComponent from '../../components/NavComponent';


export default function Navigation() {
    

    return (
        <>
            <Header />
            <div className='flex'>
                <nav className='bg-slate-100 mr-4 ml-4 h-[75vh] w-[18vw] flex-shrink-0 flex rounded-lg'>
                    <ul className='flex flex-col justify-around w-full items-center'>
                        <NavComponent 
                            url="dashboard" 
                            styling="font-medium"  
                            activeStyling="font-bold" 
                        >
                            Dashboard
                        </NavComponent>

                        <NavComponent
                            url="reports" 
                            styling="font-medium" 
                            activeStyling="font-bold"
                        >
                             Reports
                        </NavComponent>


                        <NavComponent
                            url="alerts" 
                            styling="font-medium" 
                            activeStyling="font-bold"
                        >
                             Alert Request
                        </NavComponent>
                        
                        <NavComponent
                            url="attendance" 
                            styling="font-medium" 
                            activeStyling="font-bold"
                        >
                             Staff Report
                        </NavComponent>
                        
                        <li className='border-t border-gray-300 w-[17vw] flex justify-center items-center'>
    <img src={Contact} alt="User Profile" className="w-8 h-8 object-contain cursor-pointer mt-4" />
                        </li>
                    </ul>
                </nav>
                
                 <div className='flex-grow mr-10 h-[75vh] bg-[#3a80f1] bg-opacity-10 rounded-xl'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}
 