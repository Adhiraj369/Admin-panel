import axios from 'axios';
import redIcon from '../assets/Home_fill-2.png';

const fetchComplaints = async (category) => {
  
  try {
    // Construct the URL based on the category
    const url = `http://localhost:8000/admin/complains/${category}`;
    
    // Fetch the complaints from the API
    const response = await axios.get(url);
    const complaints = response.data;

    // Map the complaints data to match the markers format
    const markers = complaints.map(complaint => ({
      lat: complaint.Lat,
      lng: complaint.Long,
      title: `${complaint.Description}`,
      icon: redIcon // Change as per your icon variable setup
    }));

    return markers;
  } catch (error) {
    console.error("Error fetching complaints:", error);
    return [];
  }
};

export default fetchComplaints;
