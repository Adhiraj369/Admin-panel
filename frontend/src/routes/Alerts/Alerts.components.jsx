import React, { useState, useEffect } from "react";
import axios from "axios";
import RedDot from "../../assets/Ellipse 191.png";
import RightArrow from "../../assets/right_arrow.png";

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState("");
  const [category, setCategory] = useState("cat1"); // Add state for category
  const [error, setError] = useState("");
  const currentDate = new Date().toLocaleDateString("en-US");

  useEffect(() => {
    async function fetchAlerts() {
      try {
        const response = await axios.get("http://localhost:8000/admin/alerts");
        setAlerts(response.data);
      } catch (error) {
        setError("Error fetching alerts. Please try again later.");
        console.error("Error fetching alerts:", error);
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
    if (newAlert.trim() === "") return;

    try {
      const response = await axios.post("http://localhost:8000/admin/alerts", {
        Alert: newAlert,
        category,
      });
      setAlerts([...alerts, response.data]);
      setNewAlert("");
      setCategory("cat1"); // Reset category to default
    } catch (error) {
      setError("Error posting alert. Please try again later.");
      console.error("Error posting alert:", error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col px-12">
        <div className="absolute right-3 top-28 xl:top-20  pt-2 flex mb-0 ml-[1000px] text-gray-500 scale-[85%]">
          <span className="text-black font-semibold whitespace-nowrap mr-1">
            Date:
          </span>{" "}
          {currentDate}
          <img src={RightArrow} alt="" className="rotate-90 h-6 w-6" />
        </div>

        <div className="m-4 mb-2 flex-auto self-center">
          <div className="mb-[-0.5rem]">
            <label htmlFor="alert">New Alert:</label>
            <input
              type="text"
              className="rounded-full pl-3 w-[80%] font-semibold py-1 m-2 focus:outline-none"
              id="alert"
              value={newAlert}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="category" className="mr-3.5">
              Category:
            </label>
            <select
              className="pr-28 pl-2 rounded-full py-[-1rem] h-[6vh]"
              id="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="cat1">Cat 1</option>
              <option value="cat2">Cat 2</option>
              <option value="cat3">Cat 3</option>
            </select>
            <button
              className="text-slate-200 bg-blue-600 px-16 py-[6px] shadow-lg text-md rounded-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg focus:outline-none m-4"
              onClick={handleFormSubmit}
            >
              Generate
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div>
            {error && <p className="text-red-500">{error}</p>}
            {/* changed the position of overflow and height to correct container (div to ul) */}
            <ul className="flex flex-col items-start gap-4 overflow-y-auto xl:max-h-[45vh] max-h-[50vh]" style={{ 
              scrollbarWidth: 'none'  
            }}>
              {alerts.length > 0 ? (
                alerts.map((alert, index) => (
                  <li
                    key={index}
                    className="text-md font-md flex justify-between items-center w-full"
                  >
                    <div className="flex">
                      <img src={RedDot} alt="" className="mr-10 scale-90" />
                      <span className="font-normal">{alert.Alert}</span> -{" "}
                      <span className="font-bold">{alert.category}</span>{" "}
                      {/* Display category */}
                    </div>
                    {/* given margin right */}
                    <img src={RightArrow} className="h-7 w-7 mr-3" alt="" />
                  </li>
                ))
              ) : (
                <li className="m-2 p-2">No alerts available</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Alerts;
