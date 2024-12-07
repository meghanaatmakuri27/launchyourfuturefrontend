

const AboutEmployee = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar & Main Content Wrapper */}
      <div className="flex">
        {/* Sidebar Section */}
        <div className="w-1/4 bg-white shadow-md h-screen">
         
        </div>

        {/* Main Content Section */}
        <div className="flex-1 p-4 bg-gray-50 min-h-screen">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About the Employee</h1>
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Who is an Employee?</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                An employee is a person employed by an organization, business, or institution to perform
                specific tasks in exchange for compensation. Employees are integral to the functioning of
                companies and contribute to growth, innovation, and productivity.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Key Responsibilities</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 leading-relaxed">
                <li>Executing assigned tasks and projects on time and efficiently.</li>
                <li>Collaborating with team members and contributing to team goals.</li>
                <li>Adhering to company policies and procedures.</li>
                <li>Maintaining a positive attitude and continuous learning.</li>
                <li>Communicating effectively with stakeholders and peers.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Why Employees Matter</h2>
              <p className="text-gray-600 mt-2 leading-relaxed">
                Employees are the backbone of every successful organization. They bring innovation,
                creativity, and expertise to the table, helping companies solve challenges, meet business
                goals, and build positive work environments. Employees are pivotal in shaping organizational
                culture and delivering exceptional customer service.
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Employee Benefits</h2>
              <ul className="list-disc list-inside text-gray-600 mt-2 leading-relaxed">
                <li>Competitive salary packages and financial incentives.</li>
                <li>Health, dental, and vision insurance coverage.</li>
                <li>Opportunities for professional development and training programs.</li>
                <li>Work-life balance through flexible working options.</li>
                <li>Retirement planning and employee savings plans.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEmployee;
