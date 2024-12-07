import { useState } from "react";
import axios from "axios"; // Import axios
import AdminSidebar from "./adminsidebar";
import './sidebar.css';

const EmployeeForm = () => {
  const [employeeDetails, setEmployeeDetails] = useState({
    id: "",
    name: "",
    department: "",
    position: "",
    location: "",
    salary: "",
    email: "",
    password:"",
    phone: "",
    isActive: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "launchyourfuturebackend.up.railway.app/employee/add", // Adjusted the endpoint for employees
        employeeDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Employee Details Submitted:", response.data);
      alert("Employee added successfully!");
    } catch (error) {
      console.error("Error adding employee:", error.response?.data || error.message);
      alert("Failed to add employee. Please try again.");
    }
  };

  return (
    <div className="flex">
       <AdminSidebar />
      <div className="w-3/4 p-6">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>

          <div className="mb-4">
            <label className="block font-medium">Employee ID</label>
            <input
              type="text"
              name="id"
              value={employeeDetails.id}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={employeeDetails.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={employeeDetails.department}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Position</label>
            <input
              type="text"
              name="position"
              value={employeeDetails.position}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={employeeDetails.location}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={employeeDetails.salary}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={employeeDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={employeeDetails.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={employeeDetails.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={employeeDetails.isActive}
                onChange={(e) => setEmployeeDetails({ ...employeeDetails, isActive: e.target.checked })}
                className="mr-2"
              />
              Active
            </label>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
