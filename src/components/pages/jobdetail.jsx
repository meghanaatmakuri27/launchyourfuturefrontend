import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeSidebar from "./employeesidebar";

const JobForm = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`launchyourfuturebackend.up.railway.app/job/view/${id}`);
        setJob(response.data);
      } catch (err) {
        setError("Error fetching job details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleEdit = () => {
    navigate(`/job/edit/${id}`);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://launchyourfuturebackend.up.railway.app/job/delete/${id}`);
      navigate("/addjob"); // Redirect to the job list after successful deletion
    } catch (err) {
      setError("Error deleting the job.");
      console.error(err);
    }
  };

  if (loading) return <div>Loading job details...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex">
      <EmployeeSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex-1 p-6">
        <h1 className="text-center text-3xl font-bold mb-6">Job Details</h1>
        <div className="card p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>
          <p className="text-sm text-gray-500">{job.jobArea}</p>
          <p className="text-sm text-gray-500">{job.jobType}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Summary:</h3>
            <p>{job.summary}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Qualifications:</h3>
            <ul>
              {job.qualifications && job.qualifications.length > 0 ? (
                job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))
              ) : (
                <p>No qualifications listed</p>
              )}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Responsibilities:</h3>
            <ul>
              {job.responsibilities && job.responsibilities.length > 0 ? (
                job.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))
              ) : (
                <p>No responsibilities listed</p>
              )}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Salary:</h3>
            <p>{job.salary}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Status:</h3>
            <p>{job.isActive ? "Active" : "Inactive"}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Created At:</h3>
            <p>{new Date(job.createdAt).toLocaleString()}</p>
          </div>

          <div className="mt-6 text-right">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleEdit}
            >
              Edit Job
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md ml-4"
              onClick={handleDelete}
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
