import { useState, useEffect } from "react";
import { FaPencilAlt, FaEye } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import EmployeeSidebar from "./employeesidebar";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to manage search input
  const navigate = useNavigate(); // Hook to navigate programmatically

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:2026/job/viewall");
        console.log(response.data);
        setJobs(response.data);
      } catch (err) {
        setError("Error fetching jobs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleResponseChange = (e, jobId) => {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, response: e.target.value } : job
    );
    setJobs(updatedJobs);
  };

  const handleEditJob = (jobId) => {
    // Navigate to the edit form page with the job ID
    navigate(`/job/edit/${jobId}`);
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) // Filter based on job title
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex">
      <EmployeeSidebar />
      <div className="w-3/4 p-6">
        <h1 className="text-center text-3xl font-bold mb-6">Job Listings</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full p-2 mb-4 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <div>No jobs available.</div>
          ) : (
            filteredJobs.map((job) => (
              <div key={job.id} className="card p-6 bg-white shadow-md rounded-md">
                 <h2 className="text-xl font-bold">Job Id:{job.id}</h2>
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-sm text-gray-600">{job.company}</p>
                <p className="text-sm text-gray-500">{job.location}</p>

                <div className="mt-4">
                  <label className="block font-medium">Response</label>
                  <select
                    value={job.response || ""}
                    onChange={(e) => handleResponseChange(e, job.id)}
                    className="w-full p-2 border rounded mt-2"
                  >
                    <option value="">Select Response</option>
                    <option value="Accept">AcceptResponse</option>
                    <option value="NotAccept">NotAcceptResponse</option>
                  </select>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link to={`/job/${job.id}`} className="text-blue-500 hover:text-blue-700">
                    <FaEye className="inline mr-2" /> View More
                  </Link>
                  <button
                    onClick={() => handleEditJob(job.id)} // This will navigate to the edit form
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    <FaPencilAlt className="inline mr-2" /> Edit Job
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;
