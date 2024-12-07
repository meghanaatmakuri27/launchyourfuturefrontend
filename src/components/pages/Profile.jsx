import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';

const ProfilePage = () => {
  const [user, setUser] = useState({
    email: '',
  });
  const [applications, setApplications] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobDetails, setJobDetails] = useState({});

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');

    if (storedEmail) {
      setUser((prevUser) => ({ ...prevUser, email: storedEmail }));

      axios
        .get(`http://localhost:2026/applications/by-email/${storedEmail}`)
        .then((response) => {
          setApplications(response.data);
          setLoading(false);

          response.data.forEach((application) => {
            axios
              .get(`http://localhost:2026/job/view/${application.jobId}`)
              .then((jobResponse) => {
                setJobDetails((prevJobDetails) => ({
                  ...prevJobDetails,
                  [application.jobId]: {
                    jobTitle: jobResponse.data.title,
                    company: jobResponse.data.company,
                  },
                }));
              })
              .catch((jobError) => console.error('Error fetching job details', jobError));
          });
        })
        .catch((error) => {
          setError('Error fetching job applications. Please try again.');
          setLoading(false);
        });
    }
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen font-sans leading-normal tracking-normal">
      {/* Navbar Section */}
      <Navbar />

      {/* Main Container - Spacing added for better visuals */}
      <div className="container mx-auto px-8 py-10 mt-16 max-w-7xl">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">User Profile</h1>
          <p className="text-gray-600 mt-2 text-lg">View and track your job application history here.</p>
        </div>

        {/* User Details Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-10 border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold mb-3 text-gray-700">User Details</h2>
          <div className="text-lg text-gray-600 mt-2">
            <strong>Email:</strong> {user.email}
          </div>
        </div>

        {/* Job Applications Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-12 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Job Applications</h2>
          {loading ? (
            <p className="text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-400">
                <thead>
                  <tr className="bg-gray-200 text-gray-700">
                    <th className="border px-6 py-3 text-center">Job ID</th>
                    <th className="border px-6 py-3 text-center">Company Name</th>
                    <th className="border px-6 py-3 text-center">Job Title</th>
                    <th className="border px-6 py-3 text-center">Application Status</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.length > 0 ? (
                    applications.map((application) => (
                      <tr key={application.id} className="hover:bg-gray-100 transition-all duration-300">
                        <td className="border px-6 py-4 text-center">{application.jobId}</td>
                        <td className="border px-6 py-4 text-center">
                          {jobDetails[application.jobId]
                            ? jobDetails[application.jobId].company
                            : 'Loading...'}
                        </td>
                        <td className="border px-6 py-4 text-center">
                          {jobDetails[application.jobId]
                            ? jobDetails[application.jobId].jobTitle
                            : 'Loading...'}
                        </td>
                        <td className="border px-6 py-4 text-center">{application.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-center border px-4 py-4 text-gray-600">
                        No applications found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
