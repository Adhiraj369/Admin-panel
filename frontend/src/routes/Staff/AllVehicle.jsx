import React, { useState } from "react";
import AVForm from "../../components/staffTables/AVForm";
import AVTable from "../../components/staffTables/AVTable";


function AllVehicle() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleSubmitToServer = () => {
    if (tableData.length === 0) {
      console.log("No data to submit.");
      return;
    }

    fetch("http://localhost:8000/api/av/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rows: tableData }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setTableData([]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      
      <div className="flex flex-col lg:flex-row items-start lg:space-x-4 px-8">
        <AVForm onFormSubmit={handleFormSubmit} />
        <AVTable tableData={tableData} onSubmit={handleSubmitToServer} />
      </div>
    </>
  );
}

export default AllVehicle;
