import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./adminsidebar";

const EmployeeEditForm = () => {
  const { id } = useParams(); // Get employee ID from URL params
  const [employeeDetails, setEmployeeDetails] = useState({
    id: "",
    name: "",
    department: "",
    salary: "",
    email: "",
    phone: "",
    isActive: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`launchyourfuturebackend.up.railway.app/employee/view/${id}`);
        setEmployeeDetails(response.data);
      } catch (err) {
        setError("Error fetching employee details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

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
      const response = await axios.put(
        `launchyourfuturebackend.up.railway.app/employee/update/${id}`,
        employeeDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Employee Updated:", response.data);
      alert("Employee updated successfully!");
    } catch (error) {
      console.error("Error updating employee:", error.response?.data || error.message);
      alert("Failed to update employee. Please try again.");
    }
  };

  if (loading) return <div>Loading employee details...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="w-3/4 p-6">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Edit Employee Details</h2>

          <div className="mb-4">
            <label className="block font-medium">Employee ID</label>
            <input
              type="text"
              name="id"
              value={employeeDetails.id}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
              disabled
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
              required
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
            <label className="block font-medium">Status</label>
            <select
              name="isActive"
              value={employeeDetails.isActive}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value={true}>Active</option>
              <option value={false}>Inactive</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeEditForm;
