import React, { useState, useEffect } from "react";
import axios from "axios";

function Reports() {
  const [category, setCategory] = useState("attendance");
  const [data, setData] = useState(null);

  const fetchData = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/admin/${category.toLowerCase()}/get`
      );
      setData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  return (
    <div className="p-6 bg-blue-100 rounded-md shadow-lg">
      <h2 className="text-xl font-bold mb-4">Report</h2>

      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 font-semibold">
          Select Category:
        </label>
        <select
          id="category"
          className="p-2 border rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="attendance">Attendance</option>
          <option value="allvehicle">All Vehicle</option>
          <option value="maintenance">Maintenance</option>
          <option value="staffreport">Staff Report</option>
          <option value="totalgarbage">Total Garbage</option>
        </select>
      </div>

      {data && data.length > 0 ? (
        data.map((table, index) => (
          <div key={index} className="mb-6">
            <h3 className="font-semibold mb-2">{table.tableName}</h3>
            <table className="min-w-full bg-white rounded-md shadow-md">
              <thead>
                <tr>
                  {table.rows.length > 0 ? (
                    Object.keys(table.rows[0]).map(
                      (key) =>
                        key !== "_id" && (
                          <th key={key} className="px-4 py-2 bg-blue-200">
                            {key}
                          </th>
                        )
                    )
                  ) : (
                    <th className="px-4 py-2 bg-blue-200">No Data</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b">
                    {Object.keys(row).map(
                      (key) =>
                        key !== "_id" && (
                          <td key={key} className="px-4 py-2">
                            {row[key]}
                          </td>
                        )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      ) : (
        <p>No data available for this category.</p>
      )}
    </div>
  );
}

export default Reports;
