import React, { useState } from "react";
import MForm from "../../components/staffTables/MForm";
import MTable from "../../components/staffTables/MTable";


function Maintenance() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleSubmitToServer = () => {
    if (tableData.length === 0) {
      console.log("No data to submit.");
      return;
    }

    fetch("http://localhost:8000/admin/maintenance/submit", {
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
        <MForm onFormSubmit={handleFormSubmit} />
        <MTable tableData={tableData} onSubmit={handleSubmitToServer} />
      </div>
    </>
  );
}

export default Maintenance;
