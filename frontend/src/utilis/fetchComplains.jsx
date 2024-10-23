import axios from 'axios';
import redIcon from '../assets/Home_fill-2.png';

const fetchComplaints = async (category) => {
  try {
    // Construct the URL based on the category
    const url = `http://localhost:8000/admin/complains/${category}`;
    
    // Fetch the complaints from the API
    const response = await axios.get(url);
    const complaints = response.data;

    // Map and filter the complaints data to match the markers format
    const markers = complaints
      .filter(complaint => complaint.Burst !== 1) // Exclude complaints marked as solved
      .map(complaint => ({
        lat: complaint.Lat,
        lng: complaint.Long,
        title: `${complaint.Description}`,
        burst: complaint.Burst,
        icon: redIcon,
        _id: complaint._id
      }));

    return markers;
  } catch (error) {
    console.error("Error fetching complaints:", error);
    return [];
  }
};

export default fetchComplaints;
