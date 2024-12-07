import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use this to navigate to the edit page
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import AdminSidebar from "./adminsidebar";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to navigate

  // Fetch employee data when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    setLoading(true);
    axios
      .get("https://launchyourfuturebackend.up.railway.app/employee/viewall")
      .then((response) => {
        setEmployees(response.data); // Update state with fetched employees
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching employees", err);
        setLoading(false);
      });
  };

  const handleEdit = (employeeId) => {
    // Navigate to the employee edit page
    navigate(`/employee/edit/${employeeId}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      axios
        .delete(`launchyourfuturebackend.up.railway.app/employee/delete/${id}`)
        .then(() => {
          alert("Employee deleted successfully");
          fetchEmployees();
        })
        .catch((err) => {
          alert("Error deleting employee");
          console.error(err);
        });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Employee Directory</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">ID</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Department</th>
                <th className="px-4 py-2 border">Salary</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-4 py-2 text-center border">
                    No employees found.
                  </td>
                </tr>
              ) : (
                employees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{employee.id}</td>
                    <td className="px-4 py-2 border">{employee.name}</td>
                    <td className="px-4 py-2 border">{employee.department}</td>
                    <td className="px-4 py-2 border">{employee.salary}</td>
                    <td className="px-4 py-2 border">{employee.email}</td>
                    <td className="px-4 py-2 border">{employee.phone}</td>
                    <td className="px-4 py-2 border">
                      {employee.isActive ? "Active" : "Inactive"}
                    </td>
                    <td className="px-4 py-2 border flex gap-2">
                      <button
                        onClick={() => handleEdit(employee.id)}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaPencilAlt />
                      </button>
                      <button
                        onClick={() => handleDelete(employee.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
