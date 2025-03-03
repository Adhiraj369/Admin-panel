import React, { useState, useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import Holder from "../../components/Holder";
import Img1 from "../../assets/transportation-truck_75588 1 .png";
import Img2 from "../../assets/dog 4.png";
import Img3 from "../../assets/Component 3.png";
import Img4 from "../../assets/blood_206397 1.png";
import Img5 from "../../assets/Shop@3x.png";
import Img6 from "../../assets/sea-waves_75765 1.png";
import Img7 from "../../assets/Road_alt_fill.png";
import Img8 from "../../assets/bus_162786 1.png";
import Img9 from "../../assets/street-lamp_2531855 1.png";
import LeftArrow from "../../assets/left_arrow.png";
import RightArrow from "../../assets/right_arrow.png";
import axios from "axios"; // Make sure to import axios

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [temperature, setTemperature] = useState("N/A"); // Default to 'N/A'
  const [alerts, setAlerts] = useState([]); // State for alerts
  const [error, setError] = useState(""); // State for error messages

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    const fetchTemperature = async () => {
      try {
        const response = await fetch("http://localhost:8000/temperature");
        const data = await response.json();
        setTemperature(data.temperature);
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };

    const fetchAlerts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/alerts");
        setAlerts(response.data);
      } catch (error) {
        setError("Error fetching alerts. Please try again later.");
        console.error("Error fetching alerts:", error);
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
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat(
    "en-IN",
    dateTimeOptions
  ).format(date);
  const [dayOfWeek, monthDay, time] = formattedDate.split(", ");

  return (
    <>
      <div>
        <div className="flex justify-center items-center py-4 xl:py-0 mr-[26rem] xl:mr-[33rem] mt-4 z-50">
          <Dropdown />
        </div>

        <div className="flex">
          {/* added gap for responsive design */}
          <div className="flex flex-col items-center gap-3 xl:gap-0">
            {/* Fixed the mb */}
            <ul className="flex mb-[-0.3rem] gap-3 xl:gap-0">
              <Holder img={Img1} title="Garbage Vehicle" url="garbage" />
              <Holder img={Img2} title="Dead Animal" url="deadanimal" />
              <Holder img={Img3} title="Open Manholes" url="manholes" />
            </ul>
            <ul className="flex mb-[-0.3rem] gap-3 xl:gap-0">
              <Holder img={Img4} title="Water Leakage" url="water" />
              <Holder img={Img5} title="Public Toilets" url="toilets" />
              <Holder img={Img6} title="Stagnant Water" url="stagnant" />
            </ul>
            <ul className="flex mb-[0.2rem] gap-3 xl:gap-0">
              <Holder img={Img7} title="Road Repair" url="road" />
              <Holder img={Img8} title="Public Transport" url="transport" />
              <Holder img={Img9} title="Street Lights" url="lights" />
            </ul>
            <div className="flex gap-1 m-1 pb-3">
              <div className="h-6 w-6 rounded-full bg-white border-2 border-blue-300"><img src={LeftArrow} alt="" /></div>
              <div className="h-6 w-6 rounded-full bg-white border-2 border-blue-300"><img src={RightArrow} alt="" /></div>
            </div>
          </div>

          <div className="w-[30vw]">
            <div className="border-l border-gray-300 m-8 mt-[-3rem]">
              <ul className="flex flex-col justify-start">
                <li className="bg-white m-4 h-[42vh] xl:w-[28vw] w-[23vw] rounded-2xl flex flex-col items-start px-3">
                  <p className="font-semibold text-xl mt-2 mb-[-0.5rem] text-red-500">
                    Alerts
                  </p>
                  <div className="m-4 ml-0 border-t-[1.5px] w-full border-slate-200">
                    {error && <p className="text-red-500">{error}</p>}
                    <ul className="flex flex-col mt-1 overflow-y-auto max-h-[32vh] overflow-x-hidden max-w-[27vw]" style={{ 
                      scrollbarWidth: 'none'  
                    }}>
                      {alerts.length > 0 ? (
                        alerts.slice().reverse().map((alert) => (
                          <li key={alert.id} className="m-1 w-full">
                            {alert.Alert}
                          </li>
                        ))
                      ) : (
                        <li className="m-2 p-2 rounded-lg bg-gray-200">
                          No alerts available
                        </li>
                      )}
                    </ul>
                  </div>
                </li>
                <li className="bg-white m-4 h-[20vh] xl:w-[28vw] w-[23vw] rounded-2xl">
                  <div className="flex justify-between items-center h-full scale-75 xl:scale-100 ml-[-1.5rem] xl:ml-0">
                    <div className="text-5xl m-3">{temperature}°C</div>
                    <ul className="flex flex-col gap-1 items-center m-4">
                      <li className="text-sm font-semibold">{dayOfWeek}</li>
                      <li className="text-sm font-semibold">{monthDay}</li>
                      <li className="text-sm font-semibold">{time}</li>
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
