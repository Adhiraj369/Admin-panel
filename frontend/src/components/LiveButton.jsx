import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

export default function LiveButton({ url, children }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(url) {
    navigate(url);
  }

  const isActive = location.pathname === url;

  return (
    <button 
      onClick={() => handleClick(url)} 
      className={`font-medium text-lg rounded-2xl p-1.5 ${isActive ? 'bg-white' : 'bg-default'}`}
    >
      {children}
    </button>
  );
}
