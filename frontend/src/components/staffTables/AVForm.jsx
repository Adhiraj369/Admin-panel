import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InputField = React.forwardRef(({ label, type = "text", name }, ref) => {
  const inputRef = useRef(null);

  React.useImperativeHandle(ref, () => ({
    getValue: () => inputRef.current.value,
    clear: () => (inputRef.current.value = ""),
  }));

  return (
    <div className="flex justify-between items-center border-b border-gray-300 py-1">
      <label className="text-sm font-normal w-2/5 text-left mr-4">
        {label}
      </label>
      <input
        ref={inputRef}
        type={type}
        name={name}
        className="w-full p-2 text-sm focus:outline-none"
      />
    </div>
  );
});

const AVForm = ({ onFormSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const driverNameRef = useRef(null);
  const vehicleTypeRef = useRef(null);
  const wardNoRef = useRef(null);
  const vehicleNumberRef = useRef(null);
  const inChargeNameRef = useRef(null);
  const noteRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const categoryMap = {
    attendance: "Attendance",
    totalgarbage: "Total Garbage",
    allvehicle: "All Vehicle",
    maintenance: "Maintenance",
    staffreport: "Staff Report",
  };

  React.useEffect(() => {
    const currentPath = location.pathname.split("/").pop().toLowerCase();
    const category = categoryMap[currentPath] || "Attendance";
    setSelectedCategory(category);
  }, [location]);

  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case "Attendance":
        navigate("/admin/attendance");
        break;
      case "Total Garbage":
        navigate("/admin/totalgarbage");
        break;
      case "All Vehicle":
        navigate("/admin/allvehicle");
        break;
      case "Maintenance":
        navigate("/admin/maintenance");
        break;
      case "Staff Report":
        navigate("/admin/staffreport");
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      driverName: driverNameRef.current.getValue(),
      vehicleType: vehicleTypeRef.current.getValue(),
      wardNo: wardNoRef.current.getValue(),
      vehicleNumber: vehicleNumberRef.current.getValue(),
      inChargeName: inChargeNameRef.current.getValue(),
      note: noteRef.current.getValue(),
    };

    onFormSubmit(formData);

    driverNameRef.current.clear();
    vehicleTypeRef.current.clear();
    wardNoRef.current.clear();
    vehicleNumberRef.current.clear();
    inChargeNameRef.current.clear();
    noteRef.current.clear();
  };

  return (
    <div className="w-3/5 mx-auto py-10 px-5">
      <div className="flex items-center mb-5">
        {/* Back Button */}
        <span
          className="text-2xl mr-3 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ←
        </span>
        <h1 className="text-4xl font-bold">Garbage Vehicle</h1>
      </div>
      <div className="flex justify-center mb-5">
        <select
          className="w-80 p-2.5 rounded-full border-2 border-black text-lg font-semibold"
          value={selectedCategory}
          onChange={handleDropdownChange}
        >
          <option>Attendance</option>
          <option>Total Garbage</option>
          <option>All Vehicle</option>
          <option>Maintenance</option>
          <option>Staff Report</option>
        </select>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
        <InputField
          ref={driverNameRef}
          label="Driver Name:"
          name="driverName"
        />
        <InputField
          ref={vehicleTypeRef}
          label="Vehicle Type:"
          name="vehicleType"
        />
        <InputField ref={wardNoRef} label="Ward No.:" name="wardNo" />
        <InputField
          ref={vehicleNumberRef}
          label="Vehicle Number:"
          name="vehicleNumber"
        />
        <InputField
          ref={inChargeNameRef}
          label="In-Charge Name:"
          name="inChargeName"
        />
        <div className="col-span-2">
          <InputField ref={noteRef} label="Note:" name="note" />
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded shadow-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AVForm;
