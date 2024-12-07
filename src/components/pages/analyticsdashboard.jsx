import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import AdminSidebar from "./adminsidebar";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Fix: Registering PointElement
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsDashboard = () => {
  // Mock data for analytics graphs

  // Data for Bar Graph (Number of Applications Over Weeks)
  const barData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Number of Applications",
        data: [5, 9, 14, 20, 30],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Options for all charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Data for Line Graph (Monthly Trend Data)
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Applications",
        data: [10, 20, 25, 15, 30, 35],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  };

  // Data for Pie Chart (Job Applications Breakdown by Department)
  const pieData = {
    labels: ["Engineering", "HR", "Finance", "IT", "Marketing"],
    datasets: [
      {
        data: [30, 20, 15, 25, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
      },
    ],
  };

  // Data for Doughnut Graph (Job Application Preferences by Role)
  const doughnutData = {
    labels: ["Admin", "User", "Faculty", "Student"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Section */}
      <div className="flex">
        <div className="w-1/4 bg-white shadow-md h-screen">
          <AdminSidebar />
        </div>

        {/* Main Analytics Dashboard Content */}
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Analytics Dashboard</h1>

          {/* Bar Graph Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Number of Applications Over Time</h2>
            <div className="h-64">
              <Bar data={barData} options={options} />
            </div>
          </div>

          {/* Line Graph Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Trends in Monthly Applications</h2>
            <div className="h-64">
              <Line data={lineData} options={options} />
            </div>
          </div>

          {/* Pie Chart Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Application Breakdown by Department</h2>
            <div className="h-64">
              <Pie data={pieData} options={options} />
            </div>
          </div>

          {/* Doughnut Chart Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Application Preferences by Role</h2>
            <div className="h-64">
              <Doughnut data={doughnutData} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
