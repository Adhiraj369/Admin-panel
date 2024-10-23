import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/Dropdown';
import SchemeHolder from '../../components/schemeHolder';
import axios from 'axios'; // Make sure to import axios
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Right from '../../assets/Expand_left_light.png';
import Left from '../../assets/Expand_left_light-2.png';

export default function Schemes() {
  const [date, setDate] = useState(new Date());
  const [temperature, setTemperature] = useState('N/A'); // Default to 'N/A'
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(''); // State for error messages
  const [schemes, setSchemes] = useState([]); // State for schemes
  const [forward, setForward] = useState(0); // State for pagination

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

    const fetchSchemes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/scheme'); // API endpoint for schemes
        setSchemes(response.data);
      } catch (error) {
        setError('Error fetching schemes. Please try again later.');
        console.error('Error fetching schemes:', error);
      }
    };

    updateDate(); // Update date on component mount
    fetchTemperature(); // Fetch initial temperature
    fetchAlerts(); // Fetch initial alerts
    fetchSchemes(); // Fetch initial schemes

    // Update date every minute
    const dateInterval = setInterval(updateDate, 60000);
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
    second: 'numeric',
  };
  const formattedDate = new Intl.DateTimeFormat('en-IN', dateTimeOptions).format(date);
  const [dayOfWeek, monthDay, time] = formattedDate.split(', ');
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/admin/dashboard/govscheme/addscheme'); // Programmatically navigate
  };

  // Handler for left button click
  const handleLeftClick = () => {
    if (forward > 0) {
      setForward(forward - 1);
    }
  };

  // Handler for right button click
  const handleRightClick = () => {
    if (forward < 2) {
      setForward(forward + 1);
    }
  };

  // Determine the slice range based on forward
  const startSlice = forward * 9;
  const endSlice = startSlice + 9;
  const displayedSchemes = schemes.slice(startSlice, endSlice);

  return (
    <>
      <div>
        {/* decreased mr from 25rem and changes justify-between */}
        <div className='flex justify-start items-center mr-[10rem] ml-5 gap-1 mt-2'>
          <div className='mx-3'>
            <img src={Left} alt="" onClick={handleLeftClick} style={{ cursor: 'pointer' }} />
          </div>
          {/* Included Dropdown inside a div */}
          <div className='mr-36'>
            <Dropdown />
          </div>
          <Button onClick={handleClick}>
            Add Scheme
          </Button>
          <div className='mx-1'>
            <img src={Right} alt="" onClick={handleRightClick} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        <div className='flex'>
          {/* scaled down the div to 95 */}
          <div className='flex flex-col my-[-1.2vh] min-w-[40vw] pt-2 mb-2 scale-95'>
            {Array.isArray(displayedSchemes) && displayedSchemes.length > 0 ? (
              <>
                {displayedSchemes.reduce((acc, scheme, index) => {
                  if (index % 3 === 0) {
                    acc.push([]);
                  }
                  acc[acc.length - 1].push(scheme);
                  return acc;
                }, []).map((schemeGroup, groupIndex) => (
                  <ul key={groupIndex} className='flex mx-[-1.5rem]'>
                    {schemeGroup.map(scheme => (
                      <SchemeHolder key={scheme.id} title={scheme.name} url={scheme.url} />
                    ))}
                  </ul>
                ))}
              </>
            ) : (
              <ul className='flex'>
                <p className='text-2xl font-semibold m-6'>ADD MORE SCHEMES</p>
              </ul>
            )}
          </div>

          <div className='w-[30vw]'>
            <div className='border-l border-gray-300 m-8 mt-[-1.6rem]'>
              <ul className="flex flex-col justify-start">
                {/* fixed the margins */}
                <li className='bg-white m-4 mt-0 h-[38vh] w-[24vw] rounded-xl flex flex-col items-center'>
                  <p className='font-semibold text-xl mt-1.5 text-red-500'>Alerts</p>
                  <div className='m-2.5 border-t-[1.5px] border-slate-200'>
                    {error && <p className='text-red-500'>{error}</p>}
                    <ul className='flex flex-col'>
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
