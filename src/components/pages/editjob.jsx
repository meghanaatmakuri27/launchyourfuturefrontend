import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './sidebar.css';
import EmployeeSidebar from "./employeesidebar";

const JobEditForm = () => {
  const { id } = useParams(); // Get job ID from URL params
  const [jobDetails, setJobDetails] = useState({
    id: "",
    title: "",
    location: "",
    company: "",
    jobArea: "",
    summary: "",
    qualifications: [""],
    responsibilities: [""],
    salary: "",
    jobType: "Job",
    isActive: true,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`launchyourfuturebackend.up.railway.app/job/view/${id}`);
        setJobDetails(response.data);
      } catch (err) {
        setError("Error fetching job details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleArrayChange = (e, index, field) => {
    const updatedArray = [...jobDetails[field]];
    updatedArray[index] = e.target.value;
    setJobDetails({ ...jobDetails, [field]: updatedArray });
  };

  const handleAddField = (field) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [field]: [...prevDetails[field], ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://launchyourfuturebackend.up.railway.app/job/update/${id}`, // Update request with job ID
        jobDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Job Details Updated:", response.data);
      alert("Job updated successfully!");
    } catch (error) {
      console.error("Error updating job:", error.response?.data || error.message);
      alert("Failed to update job. Please try again.");
    }
  };

  if (loading) return <div>Loading job details...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex">
      <EmployeeSidebar />
      <div className="w-3/4 p-6">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <h2 className="text-2xl font-bold mb-4">Edit Job Details</h2>

          <div className="mb-4">
            <label className="block font-medium">Job ID</label>
            <input
              type="text"
              name="id"
              value={jobDetails.id}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Job Title</label>
            <input
              type="text"
              name="title"
              value={jobDetails.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={jobDetails.company}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Job Area</label>
            <input
              type="text"
              name="jobArea"
              value={jobDetails.jobArea}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Job Type</label>
            <select
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="Job">Job</option>
              <option value="Intern">Intern</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Summary</label>
            <textarea
              name="summary"
              value={jobDetails.summary}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows="4"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Qualifications</label>
            {jobDetails.qualifications.map((qualification, index) => (
              <input
                key={index}
                type="text"
                value={qualification}
                onChange={(e) => handleArrayChange(e, index, "qualifications")}
                className="w-full p-2 border rounded mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() => handleAddField("qualifications")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Qualification
            </button>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Responsibilities</label>
            {jobDetails.responsibilities.map((responsibility, index) => (
              <input
                key={index}
                type="text"
                value={responsibility}
                onChange={(e) => handleArrayChange(e, index, "responsibilities")}
                className="w-full p-2 border rounded mb-2"
              />
            ))}
            <button
              type="button"
              onClick={() => handleAddField("responsibilities")}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Responsibility
            </button>
          </div>

          <div className="mb-4">
            <label className="block font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={jobDetails.salary}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={jobDetails.isActive}
                onChange={(e) => setJobDetails({ ...jobDetails, isActive: e.target.checked })}
                className="mr-2"
              />
              Active
            </label>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Update Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobEditForm;
