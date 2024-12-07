import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import AdminSidebar from "./adminsidebar";

// Register required components for charts
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  // Mock employee statistics
  const totalEmployees = 120; // Example data showing how many employees are added

  const employeeDistribution = {
    labels: ["Engineering", "HR", "Finance", "IT", "Marketing"],
    datasets: [
      {
        label: "Employee Count",
        data: [50, 30, 20, 10, 10],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
      },
    ],
  };

  const optionsBarChart = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const employeeTrends = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "New Employees Added",
        data: [10, 12, 15, 8, 20, 18, 25, 30, 22, 26, 20, 30],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
    ],
  };

  const optionsLineChart = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Section */}
      <div className="flex">
        <div className="w-1/4 bg-white shadow-md h-screen">
          <AdminSidebar />
        </div>

        {/* Main Admin Dashboard Content */}
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          {/* Dashboard Header */}
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

          {/* Total Employees Overview */}
          <div className="max-w-4xl mx-auto bg-blue-50 shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Total Employees Added</h2>
            <p className="text-4xl font-bold text-blue-800">{totalEmployees}</p>
          </div>

          {/* Bar Graph: Employee Distribution by Department */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Employee Distribution by Department</h2>
            <div className="h-64">
              <Bar data={employeeDistribution} options={optionsBarChart} />
            </div>
          </div>

          {/* Line Graph: Employee Trends */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Employee Activity Over Time</h2>
            <div className="h-64">
              <Line data={employeeTrends} options={optionsLineChart} />
            </div>
          </div>

          {/* Admin Statistics Section - Mock additional admin insights */}
          <div className="max-w-4xl mx-auto bg-yellow-50 shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">Admin Insights</h2>
            <ul className="text-gray-700">
              <li>- Total Applications Submitted This Month: 120</li>
              <li>- Total Employee Feedback Collected: 250</li>
              <li>- Active Departments: 5</li>
              <li>- Admin Role Requests Pending: 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
