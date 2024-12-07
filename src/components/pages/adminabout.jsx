
import AdminSidebar from "./adminsidebar";

const AdminAboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Section */}
      <div className="flex">
        <div className="w-1/4 bg-white shadow-md h-screen">
          <AdminSidebar />
        </div>

        {/* Main Content Section */}
        <div className="flex-1 p-6 bg-gray-50 min-h-screen">
          {/* Page Header */}
          <h1 className="text-3xl font-bold mb-6 text-gray-800">About Admin Dashboard</h1>

          {/* Introduction Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Admin Dashboard serves as the central hub for administrative actions
              and analytics related to employee management and employee operations. 
              With this dashboard, administrators can monitor employee activities,
              track statistics, manage roles, and oversee the distribution of employees across departments.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Designed with user-friendly visuals and insights through graphs and statistics,
              this dashboard allows for efficient management and decision-making for the organizations workforce.
            </p>
          </div>

          {/* Admin Role Responsibilities Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Admin Role & Responsibilities</h2>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>Monitor employee statistics and employee activity trends.</li>
              <li>Review and approve department submissions and requests.</li>
              <li>Manage employee roles and permissions efficiently.</li>
              <li>Track pending requests and act on feedback submissions.</li>
              <li>Analyze employee distribution and employee engagement across departments.</li>
            </ul>
          </div>

          {/* Features Section */}
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Key Features</h2>
            <ul className="text-gray-700 list-disc pl-5 space-y-2">
              <li>View insights on total number of employees added over time.</li>
              <li>View employee distribution across departments using visual graphs.</li>
              <li>View trends in employee activity through historical data visualizations.</li>
              <li>Manage feedback submissions from employees directly from the dashboard.</li>
              <li>Analyze role-based statistics for better decision-making.</li>
            </ul>
          </div>

          {/* Footer Section */}
          <div className="max-w-4xl mx-auto bg-gray-100 shadow-md rounded-lg p-4 text-center text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Admin Dashboard System. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAboutPage;
