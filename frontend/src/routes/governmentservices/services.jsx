import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/Dropdown';
import SchemeHolder from '../../components/schemeHolder';
import axios from 'axios'; // Make sure to import axios

export default function Services() {
  const [date, setDate] = useState(new Date());
  const [temperature, setTemperature] = useState('N/A'); // Default to 'N/A'
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(''); // State for error messages

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const fetchTemperature = async () => {
      try {
        const response = await fetch('http://localhost:8000/temperature'); // Updated URL
        const data = await response.json();
        setTemperature(data.temperature); // Adjust according to your API response
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    const fetchAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/alerts'); // Updated URL
        setAlerts(response.data);
      } catch (error) {
        setError('Error fetching alerts. Please try again later.');
        console.error('Error fetching alerts:', error);
      }
    };

    updateDate(); // Update date on component mount
    fetchTemperature(); // Fetch initial temperature
    fetchAlerts(); // Fetch initial alerts

    // Update date every minute
    const dateInterval = setInterval(updateDate, 60000);

    // Update temperature every hour
    const tempInterval = setInterval(fetchTemperature, 3600000);

    return () => {
      clearInterval(dateInterval);
      clearInterval(tempInterval);
    };
  }, []);

  // Format date and time for the Indian time zone
  const dateTimeOptions = { 
    timeZone: 'Asia/Kolkata', 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric'
  };
  const formattedDate = new Intl.DateTimeFormat('en-IN', dateTimeOptions).format(date);
  const [dayOfWeek, monthDay, time] = formattedDate.split(', ');

  return (
    <>
      <div>
        {/* fixed mr */}
        <div className='flex justify-center items-center mr-[35rem] mt-2'>
          <Dropdown />
        </div>

        <div className='flex'>
          {/* added mr */}
          <div className='flex flex-col mt-7 mr-[-1.5rem]'>
            {/* added my and mr(in first ul) */}
            <ul className='flex my-[-0.7rem] mr-[-0.7rem]'>
              <SchemeHolder title="Application for Scholarship" url='live'/>
              <SchemeHolder  title="Application for Issue of License for Wholesale Trade" url='live'/>
              <SchemeHolder  title="Application for Farmer Produce Damage Assistance" url='live'/>
            </ul>
            <ul className='flex mr-[-0.7rem]'>
            <SchemeHolder title="Application for Personal Accident Assistance" url='live'/>
              <SchemeHolder  title="Application For Providing Winter Season Fruit Plants" url='live'/>
              <SchemeHolder  title="Application for One Year Diploma in Food Processing" url='live'/>
            </ul>
            <ul className='flex mr-[-0.7rem]'>
              <SchemeHolder title="Application For Installation of Pack House" url='live'/>
              {/* <SchemeHolder  title="Service 8" url='live'/>
              <SchemeHolder  title="Service 9" url='live'/> */}
            </ul>
          </div>

          <div className='w-[30vw]'>
            <div className='border-l border-gray-300 m-8 mt-[-1.6rem]'>
              <ul className="flex flex-col justify-start">
                {/* fixed the margins */}
                <li className='bg-white m-4 h-[38vh] w-[24vw] rounded-xl flex flex-col items-center'>
                  <p className='font-semibold text-xl mt-1.5 text-red-500'>Alerts</p>
                  <div className='m-2.5 border-t-[1.5px] border-slate-200'>
                    {error && <p className='text-red-500'>{error}</p>}
                    <ul className='flex flex-col overflow-y-auto max-h-[28vh] overflow-x-hidden w-[22vw]' style={{ 
                      scrollbarWidth: 'none'  
                    }}>
                      {alerts.length > 0 ? (
                        alerts.map((alert) => (
                          <li key={alert.id} className='m-1'>
                            {alert.Alert}
                          </li>
                        ))
                      ) : (
                        <li className='m-2 p-2 rounded-lg bg-gray-200'>No alerts available</li>
                      )}
                    </ul>
                  </div>
                </li>
                <li className='bg-white m-4 h-[20vh] w-[24vw] rounded-xl'>
                  <div className='flex flex-row justify-between'>
                    <div className='text-6xl m-4'>{temperature}°</div>
                    {/* fixed items-center and margin */}
                    <ul className='flex flex-col items-start m-1'>
                      <li className='m-2 font-medium'>{dayOfWeek}</li>
                      <li className='m-2 font-medium'>{monthDay}</li>
                      <li className='m-2 font-medium'>{time}</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
