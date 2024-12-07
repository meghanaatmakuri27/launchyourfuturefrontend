import { useState, useEffect } from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import Navbar from './navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // React Router for navigation

const JobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [seniorityFilter, setSeniorityFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate(); // Initialize navigation function

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:2026/job/viewall');
        setJobs(response.data); // Set the fetched data
      } catch (err) {
        setError('Error fetching jobs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyNow = (job) => {
    // Check if JWT token is present in localStorage
    const token = localStorage.getItem('jwtToken');
    console.log('JWT Token:', token);
    
    if (token) {
      // If token is present, navigate to the apply page with job data
      navigate('/apply', { state: { job } });
    } else {
      // If token is not present, navigate to the login page
      navigate('/login');
    }
  };
  
  const filteredJobs = jobs.filter(
    (job) =>
      (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.jobType.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (job.location.toLowerCase().includes(locationQuery.toLowerCase()) ||
        job.additionalLocation?.toLowerCase().includes(locationQuery.toLowerCase())) &&
      (categoryFilter === '' || job.jobArea === categoryFilter) &&
      (seniorityFilter === '' || job.seniority === seniorityFilter)
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-[80px]">
        {/* Hero Section */}
        <div className="relative w-full h-[300px]">
          <img
            src="/landing-background.jpg"
            alt="Header Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold">Transform Your Future</h1>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row justify-center mt-6 gap-4 px-6">
          <input
            type="text"
            placeholder="Search by job title or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:max-w-md p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Search by city or country..."
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            className="w-full md:max-w-md p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex justify-center mt-4 gap-4 px-6">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Categories</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Hardware Engineering">Hardware Engineering</option>
          </select>
          <select
            value={seniorityFilter}
            onChange={(e) => setSeniorityFilter(e.target.value)}
            className="p-3 border rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500"
          >
            <option value="">All Seniority Levels</option>
            <option value="Internship">Internship</option>
            <option value="Junior">Junior</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        {/* Job Cards and Description Section */}
        <div className="flex flex-col md:flex-row mt-8 px-6">
          {/* Job Cards */}
          <div className="w-full md:w-1/3 md:max-h-screen overflow-y-auto p-4">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="border-2 p-6 rounded-xl mb-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white"
                  onClick={() => handleJobClick(job)}
                >
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <div className="text-xl font-semibold text-gray-800 ">{job.title}</div>
                    <span className="text-sm text-gray-500">{job.jobType}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 ">
                    <FaMapMarkerAlt className="text-gray-500" />
                    <p className="text-gray-600">{job.location}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-4 ">
                    <FaBriefcase className="text-gray-500" />
                    <p className="text-gray-600">{job.jobArea}</p>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => handleApplyNow(job)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                    >
                      Apply Now
                    </button>
                    <FaArrowRight className="text-blue-600 hover:text-blue-700 text-xl" />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No jobs found matching your search criteria.</p>
            )}
          </div>

          {/* Job Description Section */}
          {selectedJob ? (
  <div className="w-full md:w-2/3 border p-6 rounded-lg bg-white">
    <h2 className="text-3xl font-semibold text-center">{selectedJob.title}</h2>
    <p className="text-lg text-gray-600 text-center">{selectedJob.location}</p>
    <p className="text-sm text-gray-500 mt-4 text-center">{selectedJob.summary}</p>

    {/* Company Details */}
    <div className="mt-6">
      <h3 className="font-semibold">Company</h3>
      <p className="text-gray-600">{selectedJob.companyName}</p>
      <p className="text-sm text-gray-500">{selectedJob.companyDescription}</p>
    </div>

    {/* Qualifications Section */}
    <div className="mt-6">
      <h3 className="font-semibold">Qualifications</h3>
      <ul className="list-disc pl-6">
        {selectedJob.qualifications.map((qualification, index) => (
          <li key={index} className="text-gray-600">{qualification}</li>
        ))}
      </ul>
    </div>

    {/* Responsibilities Section */}
    <div className="mt-6">
      <h3 className="font-semibold">Responsibilities</h3>
      <ul className="list-disc pl-6">
        {selectedJob.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-600">{responsibility}</li>
        ))}
      </ul>
    </div>

    {/* Salary Section */}
    <div className="mt-6">
      <span className="font-semibold">Salary:</span>
      <p>{selectedJob.salary}</p>
    </div>

    {/* Benefits Section */}
    <div className="mt-6">
      <h3 className="font-semibold">Benefits</h3>
      <ul className="list-disc pl-6">
        {selectedJob.benefits?.map((benefit, index) => (
          <li key={index} className="text-gray-600">{benefit}</li>
        ))}
      </ul>
    </div>

    {/* Created At Section */}
    <div className="mt-6">
      <span className="font-semibold">Created At:</span>
      <p>{new Date(selectedJob.createdAt).toLocaleDateString()}</p>
    </div>

    {/* Application Deadline Section */}
    <div className="mt-6">
      <span className="font-semibold">Application Deadline:</span>
      <p>{new Date(selectedJob.applicationDeadline).toLocaleDateString()}</p>
    </div>

    {/* Apply Now Button */}
    <button
      onClick={() => handleApplyNow(selectedJob)}
      className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full flex items-center justify-center w-full"
    >
      <span>Apply Now</span>
      <FaArrowRight className="ml-2 text-xl" />
    </button>
  </div>
) : (
  <div className="w-full md:w-2/3 p-6 text-center bg-gray-100 rounded-lg">
    <p className="text-gray-500 text-lg">Select a job to view its details.</p>
  </div>
)}

        </div>
      </div>
    </>
  );
};

export default JobPage;