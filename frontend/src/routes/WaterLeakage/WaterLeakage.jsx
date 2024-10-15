import React, { useEffect, useState } from 'react';
import fetchComplaints from '../../utilis/fetchComplains';
import MapContainer from "../../components/maps";

export default function WaterLeakage() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedComplaints = await fetchComplaints('water');
      setComplaints(fetchedComplaints);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex  m-6">
        <div style={{ width: '70%' }}> 
          <MapContainer category='water'/>
        </div>
        <div className='flex flex-col items-center mr-3'>
          <h2 className='font-bold text-2xl my-3'>Water Leakage Complaints</h2>
          <ol className="list-decimal pl-5">
            {complaints.map((complaint, index) => (
              <li className='text-lg font-medium' key={index}>{complaint.title}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

