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
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-2xl border border-gray-300 shadow-sm pr-16 pl-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          {title}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
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
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a href="/admin/dashboard/govscheme" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Government Schemes
            </a>
            <a href="/admin/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Complains
            </a>
            <a href="/admin/dashboard/govservice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Government Services
            </a>
            <a href="/admin/dashboard/animalwelfare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
              Animal Wellfare
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
