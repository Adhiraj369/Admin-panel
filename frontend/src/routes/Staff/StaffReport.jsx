import React, { useState } from "react";
import SRForm from "../../components/staffTables/SRTable";
import SRTable from "../../components/staffTables/SRTable";
import Logo from "../../assets/logoMain.png";

function StaffReport() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData((prevData) => [...prevData, formData]);
  };

  const handleSubmitToServer = () => {
    if (tableData.length === 0) {
      console.log("No data to submit.");
      return;
    }

    fetch("http://localhost:8000/admin/staff-report/submit", {
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
      <div className="flex items-center justify-between py-4 px-8">
        <img src={Logo} alt="Logo" className="h-12 cursor-pointer" />
        <div className="flex items-center space-x-2">
          <span className="text-lg cursor-pointer">←</span>
          <span className="text-xl font-semibold">Back to Admin Panel</span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-4 px-8">
        <SRForm onFormSubmit={handleFormSubmit} />
        <SRTable tableData={tableData} onSubmit={handleSubmitToServer} />
      </div>
    </>
  );
}

export default StaffReport;
