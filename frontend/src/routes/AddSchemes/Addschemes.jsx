import React, { useState } from 'react';
import axios from 'axios';

export default function Addschemes() {
  const [schemeData, setSchemeData] = useState({
    name: '',
    description: '',
    url: '',
    category: ''
  });

  const handleChange = (e) => {
    setSchemeData({
      ...schemeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8000/admin/scheme', schemeData);
      console.log('Scheme added successfully:', response.data);
      // Reset form or give feedback to the user
      setSchemeData({ name: '', description: '', url: '', category: '' });
    } catch (error) {
      console.error('Error adding scheme:', error);
    }
  };

  return (
    <div className='m-[2vw]'>
      <h2 className="text-2xl font-bold mb-4">Add a New Scheme</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-lg">Scheme Name:</label>
          <input
            type="text"
            name="name"
            value={schemeData.name}
            onChange={handleChange}
            className=" pl-20 p-1 shadow-lg text-lg rounded-md m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-lg">Description:</label>
          <textarea
            name="description"
            value={schemeData.description}
            onChange={handleChange}
            className=" pr-20  pl-20 p-1 shadow-lg text-lg rounded-md m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-lg">URL:</label>
          <input
            type="url"
            name="url"
            value={schemeData.url}
            onChange={handleChange}
            className=" pr-20  pl-20 p-1 shadow-lg text-lg rounded-md m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-lg">Category:</label>
          <input
            type="text"
            name="category"
            value={schemeData.category}
            onChange={handleChange}
            className=" pr-20 b pl-20 p-1 shadow-lg text-lg rounded-md m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="text-slate-200 pr-20 bg-blue-600 pl-20 p-1 shadow-lg text-lg rounded-md m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
        >
          Add Scheme
        </button>
      </form>
    </div>
  );
}
