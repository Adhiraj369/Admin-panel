import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function UnAuth() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/admin/dashboard'); // Programmatically navigate
    };

    return (
        <div className=' items-center flex flex-col'>
            <h1 className='font-bold'>ACCESS DENIED</h1>
            <Button onClick={handleClick} cl>
                Go to Dashboard
            </Button>
        </div>
    );
}
