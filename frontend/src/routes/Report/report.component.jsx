import React, { useState } from "react";
// import axios from "axios";
import HolderReport from "../../components/HolderReport";
import Img from "../../assets/report.png";
import Arrow from "../../assets/Expand_left_light_down.png";
import ArrowSmall from "../../assets/Expand_down.png";

// function Reports() {
//   const [category, setCategory] = useState("attendance");
//   const [data, setData] = useState(null);

//   const fetchData = async (category) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:8000/admin/${category.toLowerCase()}/get`
//       );
//       setData(response.data.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData(category);
//   }, [category]);

//   return (
//     <div className="p-6 bg-blue-100 rounded-md shadow-lg">
//       <h2 className="text-xl font-bold mb-4">Report</h2>

//       <div className="mb-4">
//         <label htmlFor="category" className="block mb-2 font-semibold">
//           Select Category:
//         </label>
//         <select
//           id="category"
//           className="p-2 border rounded-md"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="attendance">Attendance</option>
//           <option value="allvehicle">All Vehicle</option>
//           <option value="maintenance">Maintenance</option>
//           <option value="staffreport">Staff Report</option>
//           <option value="totalgarbage">Total Garbage</option>
//         </select>
//       </div>

//       {data && data.length > 0 ? (
//         data.map((table, index) => (
//           <div key={index} className="mb-6">
//             <h3 className="font-semibold mb-2">{table.tableName}</h3>
//             <table className="min-w-full bg-white rounded-md shadow-md">
//               <thead>
//                 <tr>
//                   {table.rows.length > 0 ? (
//                     Object.keys(table.rows[0]).map(
//                       (key) =>
//                         key !== "_id" && (
//                           <th key={key} className="px-4 py-2 bg-blue-200">
//                             {key}
//                           </th>
//                         )
//                     )
//                   ) : (
//                     <th className="px-4 py-2 bg-blue-200">No Data</th>
//                   )}
//                 </tr>
//               </thead>
//               <tbody>
//                 {table.rows.map((row, rowIndex) => (
//                   <tr key={rowIndex} className="border-b">
//                     {Object.keys(row).map(
//                       (key) =>
//                         key !== "_id" && (
//                           <td key={key} className="px-4 py-2">
//                             {row[key]}
//                           </td>
//                         )
//                     )}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ))
//       ) : (
//         <p>No data available for this category.</p>
//       )}
//     </div>
//   );
// }

function Reports() {
  const [dropdownValue, setDropdownValue] = useState("Garbage Vehicle");

  const currentDate = new Date().toLocaleDateString("en-US");

  return (
    <div className="flex flex-col">
      {/* <div className="relative flex flex-col justify-between items-center w-full max-w-5xl mb-10">
        <div className="relative inline-block mt-[35px] align-middle">
          <div>
            <select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              className="appearance-none p-3 bg-white rounded-full text-black font-semibold w-[352px] h-[38]"
              style={{ paddingRight: "40px" }}
            >
              <option
                value="Garbage Vehicle"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Garbage Vehicle
              </option>
              <option
                value="Option 2"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Option 2
              </option>
              <option
                value="Option 3"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Option 3
              </option>
              <option
                value="Option 3"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Option 3
              </option>
              <option
                value="Option 3"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Option 3
              </option>
            </select>
          </div>
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img src={Arrow} alt="Arrow" className="w-[40px] h-[40px]" />
          </span>
        </div>

        <div className="absolute xl:right-[-180px] lg:right-[-1200px] md:right-[120px] right-[-5px] top-24 text-gray-500 font-semibold whitespace-nowrap scale-[85%] max-w-[calc(100%-20px)] px-4">
          <span className="text-black">Date:</span> {currentDate}
          <img
            src={ArrowSmall}
            alt="ArrowSmall"
            className="inline-block w-[22px] h-[21px]"
          />
        </div>
      </div> */}
      <div className="relative flex flex-col justify-between items-center w-full max-w-5xl mb-10">
        <div className="relative inline-block mt-[35px] align-middle">
          <div>
            <select
              value={dropdownValue}
              onChange={(e) => setDropdownValue(e.target.value)}
              className="appearance-none p-2 bg-white rounded-full text-black font-semibold lg:w-[320px] w-[352px] h-[38px] items-center ml-20"
              style={{ paddingRight: "40px" }}
            >
              <option
                value="Garbage Vehicle"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Garbage Vehicle
              </option>
              <option
                value="Option 2"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Option 2
              </option>
              <option
                value="Option 3"
                className="px-4 py-1.5 text-gray-700 bg-white rounded-full border-2 border-black"
              >
                Option 3
              </option>
            </select>
          </div>
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <img src={Arrow} alt="Arrow" className="w-[40px] h-[40px]" />
          </span>
        </div>

        {/* Responsive Date Container */}
        <div
          className="flex items-center justify-end text-gray-500 font-semibold whitespace-nowrap px-3 mb-[-30px] mt-10"
          style={{ width: "120%", maxWidth: "90vw" }}
        >
          <span className="text-black">Date:</span> {currentDate}
          <img
            src={ArrowSmall}
            alt="ArrowSmall"
            className="inline-block w-[22px] h-[21px] ml-2"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <ul className="flex flex-row gap-0">
          <HolderReport img={Img} title="Total Garbage" url="/total-garbage" />
          <HolderReport img={Img} title="All Vehicle" url="/all-vehicle" />
          <HolderReport img={Img} title="Maintenance" url="/maintenance" />
          <HolderReport img={Img} title="Staff Report" url="/staff-report" />
        </ul>
      </div>
    </div>
  );
}

export default Reports;
