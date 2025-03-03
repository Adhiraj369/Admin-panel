import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const title = path.includes('admin/dashboard/govscheme')
    ? 'Schemes'
        : path.includes('/admin/dashboard/animalwelfare')
            ? 'Animal Wellfare'
            : path.includes('admin/dashboard/govservice')
                ? 'Government Services'
                : path.includes('staff')
                  ? 'Staff'
                  : path.includes('admin/dashboard')
                    ? 'Complains'
                    : '';

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          className="inline-flex justify-between items-center w-[220%] rounded-2xl border border-gray-300 shadow-sm px-4 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {title}
          <svg
            className={`-mr-0 ml-1 mt-0.5 h-6 w-6 opacity-60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.72a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 w-[220%] rounded-full ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="" role="none">
            <a href="/admin/dashboard/govscheme" className="block px-4 py-1.5 text-xs text-gray-700 bg-white rounded-full border-2 border-black hover:bg-gray-50" role="menuitem">
              Government Schemes
            </a>
            <a href="/admin/dashboard" className="block px-4 py-1.5 text-xs text-gray-700 bg-white rounded-full border-2 border-black hover:bg-gray-50" role="menuitem">
              Complains
            </a>
            <a href="/admin/dashboard/govservice" className="block px-4 py-1.5 text-xs text-gray-700 bg-white rounded-full border-2 border-black hover:bg-gray-50" role="menuitem">
              Government Services
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
