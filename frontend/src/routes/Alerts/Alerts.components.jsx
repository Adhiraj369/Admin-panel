import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RedDot from '../../assets/Ellipse 191.png'

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState('');
  const [error, setError] = useState('');

  // Fetch alerts from the backend when the component mounts
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

  // Handle input change
  const handleInputChange = (event) => {
    setNewAlert(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = async () => {
    if (newAlert.trim() === '') return;

    try {
      const response = await axios.post('http://localhost:8000/admin/alerts', { Alert: newAlert });
      setAlerts([...alerts, response.data]); // Update the alerts list with the new alert
      setNewAlert(''); // Clear the input field
    } catch (error) {
      setError('Error posting alert. Please try again later.');
      console.error('Error posting alert:', error);
    }
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='h-[5vh] m-4 '>
          <label htmlFor="alert">New Alert:</label>
          <input
            type="text"
            className='rounded-xl text-center px-12 m-2'
            id='alert'
            value={newAlert}
            onChange={handleInputChange}
          />

          <button                  
            className="text-slate-200 bg-blue-600 px-4 py-1 shadow-lg text-md rounded-xl m-3 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none"
            onClick={handleFormSubmit}               
          >                  
            Generate        
          </button>
        </div>
        <h2 className='text-xl font-bold mb-4'>All Reports</h2>
       <div className='b overflow-y-auto max-h-[500px]'>
  
  {error && <p className='text-red-500'>{error}</p>}
  <ul className='flex flex-col items-start'>
    {alerts.length > 0 ? (
      alerts.map((alert, index) => (
        <li key={index} className='m-1 p-2 text-lg font-md flex flex-row items-center'>
          <img src={RedDot} alt="" className='mr-10'/>
          {alert.Alert}
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
