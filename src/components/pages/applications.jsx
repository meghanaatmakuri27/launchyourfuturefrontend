import { useState, useEffect } from 'react';
import axios from 'axios';
import EmployeeSidebar from './employeesidebar';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobIdFilter, setJobIdFilter] = useState('');

  // Fetch applications data when the component mounts
  useEffect(() => {
    axios.get('https://launchyourfuturebackend.up.railway.app/applications/')
      .then((response) => {
        setApplications(response.data);
        setFilteredApplications(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('An error occurred while fetching data');
        setLoading(false);
      });
  }, []);

  // Handle filter change
  const handleFilterChange = (event) => {
    const jobId = event.target.value;
    setJobIdFilter(jobId);

    if (jobId === '') {
      setFilteredApplications(applications);
    } else {
      const filtered = applications.filter(application =>
        application.jobId.toString().includes(jobId)
      );
      setFilteredApplications(filtered);
    }
  };

  // Handle status change for an application
  const handleStatusChange = (applicationId, newStatus) => {
    const updatedApplications = applications.map(application =>
      application.id === applicationId ? { ...application, status: newStatus } : application
    );

    setApplications(updatedApplications);
    setFilteredApplications(updatedApplications);

    axios.put(`https://launchyourfuturebackend.up.railway.app/applications/${applicationId}`, { status: newStatus })
      .then(() => {
        console.log('Status updated');
      })
      .catch(() => {
        const revertedApplications = applications.map(application =>
          application.id === applicationId ? { ...application, status: application.status } : application
        );
        setApplications(revertedApplications);
        setFilteredApplications(revertedApplications);
        setError('An error occurred while updating the status');
      });
  };

  // Handle delete for application
  const handleDelete = (applicationId) => {
    axios.delete(`https://launchyourfuturebackend.up.railway.app/applications/delete/${applicationId}`)
      .then(() => {
        const updatedApplications = applications.filter(application => application.id !== applicationId);
        setApplications(updatedApplications);
        setFilteredApplications(updatedApplications);
      })
      .catch(() => {
        setError('Failed to delete application');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <EmployeeSidebar />
      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Applications</h1>

        {/* Filter Input */}
        <div className="mb-4">
          <label htmlFor="jobIdFilter" className="text-sm font-medium">Filter by Job ID:</label>
          <input
            id="jobIdFilter"
            type="text"
            value={jobIdFilter}
            onChange={handleFilterChange}
            className="mt-1 p-2 border border-gray-300 rounded"
            placeholder="Enter Job ID"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300">Job ID</th>
                <th className="px-4 py-2 border border-gray-300">First Name</th>
                <th className="px-4 py-2 border border-gray-300">Last Name</th>
                <th className="px-4 py-2 border border-gray-300">Email</th>
                <th className="px-4 py-2 border border-gray-300">Phone</th>
                <th className="px-4 py-2 border border-gray-300">Gender</th>
                <th className="px-4 py-2 border border-gray-300">Country</th>
                <th className="px-4 py-2 border border-gray-300">Can Verify Work</th>
                <th className="px-4 py-2 border border-gray-300">Education</th>
                <th className="px-4 py-2 border border-gray-300">Skills</th>
                <th className="px-4 py-2 border border-gray-300">Resume</th>
                <th className="px-4 py-2 border border-gray-300">Status</th>
                <th className="px-4 py-2 border border-gray-300">Change Status</th>
                <th className="px-4 py-2 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.length === 0 ? (
                <tr>
                  <td colSpan="13" className="px-4 py-2 text-center border border-gray-300">No applications found.</td>
                </tr>
              ) : (
                filteredApplications.map(application => (
                  <tr key={application.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border border-gray-300">{application.jobId}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.firstName}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.lastName}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.email}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.phone}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.gender}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.country}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.canVerifyWork ? 'Yes' : 'No'}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.educationDetails || 'No Info'}</td>
                    <td className="px-4 py-2 border border-gray-300">{application.skills.join(', ')}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      {application.resume ? (
                        <a
                          href={`data:application/pdf;base64,${application.resume}`}
                          download
                          className="inline-block bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded"
                        >
                          Download Resume
                        </a>
                      ) : 'No Resume'}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">{application.status}</td>
                    <td className="px-4 py-2 border border-gray-300">
                      <select
                        value={application.status}
                        onChange={(e) => handleStatusChange(application.id, e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                      >
                        <option value="UnderConsideration">UnderConsideration</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <button
                        onClick={() => handleDelete(application.id)}
                        className="inline-block bg-red-500 text-white hover:bg-red-700 py-2 px-4 rounded"
                      >
                        Delete
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

export default Applications;
