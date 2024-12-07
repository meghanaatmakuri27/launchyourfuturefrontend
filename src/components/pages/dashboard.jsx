
import Card from "./card";

const Dashboard = () => {
  const stats = [
    { title: "Total Applications", value: 120 },
    { title: "Total Jobs Posted", value: 45 },
    { title: "Interviews Scheduled", value: 30 },
    { title: "Offers Made", value: 10 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-white shadow-lg">
        
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
