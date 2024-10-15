import React from 'react'

function Button({type,children ,...props}) {
  return (
    <button
          type={type}
          className="text-slate-200 pr-20 bg-blue-600 pl-20 p-1 shadow-lg text-lg rounded-md m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"                    
          {...props}
      >                    
              {children}
      </button>
  )
}

export default Button
