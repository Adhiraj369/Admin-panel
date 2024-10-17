import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RedDot from '../../assets/Ellipse 191.png';

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState('');
  const [category, setCategory] = useState('cat1'); // Add state for category
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await axios.get('http://localhost:8000/admin/alerts');
        setAlerts(response.data);
      } catch (error) {
        setError('Error fetching alerts. Please try again later.');
        console.error('Error fetching alerts:', error);
      }
    }

    fetchAlerts();
  }, []);

  const handleInputChange = (event) => {
    setNewAlert(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value); // Handle category change
  };

  const handleFormSubmit = async () => {
    if (newAlert.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:8000/admin/alerts', { Alert: newAlert, category });
      setAlerts([...alerts, response.data]);
      setNewAlert('');
      setCategory('cat1'); // Reset category to default
    } catch (error) {
      setError('Error posting alert. Please try again later.');
      console.error('Error posting alert:', error);
    }
  };

  return (
    <>
      
      <div className='flex flex-col items-center'>
        <span>
        <div className='h-[5vh] m-4 flex-auto'>
          <label htmlFor="alert">New Alert:</label>
          <input
            type="text"
            className='rounded-xl text-center px-12 m-2'
            id='alert'
            value={newAlert}
            onChange={handleInputChange}
          />

          <div>
            <label htmlFor="category" className='mr-2'>Category:</label>
          <select id="category" value={category} onChange={handleCategoryChange}>
            <option value="cat1">Cat 1</option>
            <option value="cat2">Cat 2</option>
            <option value="cat3">Cat 3</option>
          </select>
          </div>
          
 </div>
          <button                  
            className="text-slate-200 bg-blue-600 px-4 py-1 shadow-lg text-md rounded-xl  transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none m-4"
            onClick={handleFormSubmit}               
          >                  
            Generate        
          </button>
          </span>
        
        <h2 className='text-xl font-bold mb-4'>All Reports</h2>
        <div className='b overflow-y-auto max-h-[500px]'>
          {error && <p className='text-red-500'>{error}</p>}
          <ul className='flex flex-col items-start'>
            {alerts.length > 0 ? (
              alerts.map((alert, index) => (
                <li key={index} className='m-1 p-2 text-lg font-md flex flex-row items-center'>
                  <img src={RedDot} alt="" className='mr-10'/>
                  {alert.Alert} - <span className='font-bold'>{alert.category}</span> {/* Display category */}
                </li>
              ))
            ) : (
              <li className='m-2 p-2'>No alerts available</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Alerts;
