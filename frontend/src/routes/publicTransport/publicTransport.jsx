import React, { useEffect, useState } from 'react';
import fetchComplaints from '../../utilis/fetchComplains'; // Update the path to your fetchComplaints function
import MapContainer from "../../components/maps";

export default function PublicTransport() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedComplaints = await fetchComplaints('publicTransport');
        setComplaints(fetchedComplaints);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchData();
  }, []);

  const markAsSolved = async (id) => {
    const confirmMessage = "Are you sure you want to mark the complaint as solved? This action is irreversible.";
    if (window.confirm(confirmMessage)) {
      try {
        const response = await fetch(`http://localhost:8000/admin/complains/mark-solved/${id}`, {
          method: 'POST',
        });

        if (!response.ok) {
          throw new Error("Failed to mark as solved");
        }

        const updatedComplaint = await response.json();
        setComplaints((prevComplaints) =>
          prevComplaints.map((complaint) =>
            complaint._id === updatedComplaint._id ? { ...complaint, Burst: 1 } : complaint
          ).filter(complaint => complaint.Burst !== 1)
        );

      } catch (error) {
        console.error("Error marking complaint as solved:", error);
      }
    }
  };

  return (
    <>
      <div className="flex m-6">
        <div style={{ width: '70%' }}>
          <MapContainer category='publicTransport' />
        </div>
        <div className='flex flex-col items-center mr-3'>
          <h2 className='font-bold text-2xl my-3'>Public Transport Complaints</h2>
          <ol className="list-decimal pl-5">
            {complaints
              .filter((complaint) => complaint.Burst !== 1)
              .map((complaint) => (
                <li className='text-lg font-medium flex justify-between items-center m-1' key={complaint._id}>
                  <span>{complaint.title}</span>
                  <button
                    onClick={() => markAsSolved(complaint._id)}
                    className="text-white bg-red-600 rounded p-1 ml-3 text-sm"
                  >
                    Mark as Solved
                  </button>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
}
