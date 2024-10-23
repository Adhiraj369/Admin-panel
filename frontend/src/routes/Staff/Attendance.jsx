import React, { useState } from "react";
import AForm from "../../components/staffTables/AForm";
import ATable from "../../components/staffTables/ATable";

function Attendance() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleSubmitToServer = () => {
    if (tableData.length === 0) {
      console.log("No data to submit.");
      return;
    }

    fetch("http://localhost:8000/admin/attendance/add", {
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
      <div className="flex flex-col lg:flex-row items-start lg:space-x-4 px-8 w-full">
        <AForm onFormSubmit={handleFormSubmit} />
        <div className="overflow-x-auto w-full">
          <ATable tableData={tableData} onSubmit={handleSubmitToServer} />
        </div>
      </div>
    </>
  );
}

export default Attendance;
