import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/Dropdown';
import Holder from '../../components/Holder';
import Img1 from '../../assets/transportation-truck_75588 1.png';
import Img2 from '../../assets/dog 4.png';
import Img3 from '../../assets/Component 3.png';
import Img4 from '../../assets/blood_206397 1.png';
import Img5 from '../../assets/Shop@3x.png';
import Img6 from '../../assets/sea-waves_75765 1.png';
import Img7 from '../../assets/Road_alt_fill.png';
import Img8 from '../../assets/bus_162786 1.png';
import Img9 from '../../assets/street-lamp_2531855 1.png';
import axios from 'axios'; // Make sure to import axios

export default function Dashboard() {
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
        const response = await fetch('http://localhost:8000/temperature');
        const data = await response.json();
        setTemperature(data.temperature); 
      } catch (error) {
        console.error('Error fetching temperature:', error);
      }
    };

    const fetchAlerts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/admin/alerts');
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
        <div className='flex justify-center items-center mr-[25rem] mt-2'>
          <Dropdown />
        </div>

        <div className='flex'>
          <div className='flex flex-col'>
            <ul className='flex'>
              <Holder img={Img1} title="Garbage Vehicle" url='garbage'/>
              <Holder img={Img2} title="Dead Animal" url='deadanimal'/>
              <Holder img={Img3} title="Open Manholes" url='manholes'/>
            </ul>
            <ul className='flex'>
              <Holder img={Img4} title="Water Leakage" url='water'/>
              <Holder img={Img5} title="Public Sandas" url='toilets'/>
              <Holder img={Img6} title="Stagnant Water" url='stagnant'/>
            </ul>
            <ul className='flex'>
              <Holder img={Img7} title="Road Repair" url='road'/>
              <Holder img={Img8} title="Public Transport" url='transport'/>
              <Holder img={Img9} title="Street Lights" url='lights'/>
            </ul>
          </div>

          <div className='w-[30vw]'>
            <div className='border-l border-gray-300 m-8 mt-[-1.6rem]'>
              <ul className="flex flex-col justify-start">
                <li className='bg-white m-4 h-[38vh] w-[24vw] rounded-xl flex flex-col items-center'>
                  <p className='font-semibold text-xl mt-4 text-red-500'>Alerts</p>
                  <div className='m-4 border-t-[1.5px] border-slate-200'>
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
                    <div className='text-5xl m-4'>{temperature}°C</div>
                    <ul className='flex flex-col items-center m-4'>
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
