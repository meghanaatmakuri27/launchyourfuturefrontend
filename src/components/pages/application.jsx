import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const { state } = useLocation();
  const job = state?.job;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    resume: null,
    gender: '',
    country: '',
    canVerifyWork: '',
    jobId: job?.id || '',
    education: [{ degree: '', institution: '', yearOfPassing: '' }],
    skills: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field: ${name}, Value: ${value}`); // Debug log
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      setFormError('Please upload a valid PDF file for your resume.');
      return;
    }
    setFormError('');
    setFormData({ ...formData, resume: file });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][field] = value;
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducationField = () => {
    if (formData.education.length >= 3) {
      setFormError('You can only add up to 3 education entries.');
      return;
    }
    setFormData({
      ...formData,
      education: [...formData.education, { degree: '', institution: '', yearOfPassing: '' }],
    });
    setFormError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a new FormData instance
    const submissionData = new FormData();
    submissionData.append("jobId", formData.jobId);
    submissionData.append("firstName", formData.firstName);
    submissionData.append("lastName", formData.lastName);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("gender", formData.gender);
    submissionData.append("country", formData.country);
    submissionData.append("canVerifyWork", formData.canVerifyWork);
    if (formData.resume) {
      submissionData.append("resume", formData.resume);
    }
    submissionData.append("educationDetails", JSON.stringify(formData.education));
    submissionData.append("skills", formData.skills);
  
    try {
      const response = await axios.post(
        "http://localhost:2026/applications/add",
        submissionData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Application submitted:", response.data);
      // Redirect or display a success message
      navigate("/success");
    } catch (error) {
      console.error("Error submitting application:", error);
  
      // Handle 400 error (duplicate application)
      if (error.response && error.response.status === 400) {
        setFormError("You have already applied for this job.");
      } else {
        setFormError("Failed to submit the application. Please try again.");
      }
    }
  };
  
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Submit Your Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-xl font-bold">{job?.title}</p>

        {/* Error Message */}
        {formError && <div className="text-red-500 mb-4">{formError}</div>}

        {/* Basic Details */}
        <label>
          First Name *
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>

        <label>
          Last Name *
          <input
            type="text"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>

        <label>
          Phone Number *
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>

        <label>
          Resume *
          <input
            type="file"
            name="resume"
            required
            onChange={handleFileChange}
            className="block w-full p-2 border rounded"
          />
        </label>

        {/* Gender */}
        <div>
          <p className="font-semibold">Gender *</p>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
              className="mr-2"
            />
            Male
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
              className="mr-2"
            />
            Female
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
              className="mr-2"
            />
            Other
          </label>
        </div>

        <label>
          Country *
          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </label>

        <label>
          Can Verify Work Rights? *
          <select
            name="canVerifyWork"
            required
            value={formData.canVerifyWork}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        {/* Education Details */}
        <div>
          <p className="text-lg font-semibold">Education Details *</p>
          {formData.education.map((edu, index) => (
            <div key={index} className="space-y-2 mb-4">
              <label>
                Degree *
                <input
                  type="text"
                  name={`degree-${index}`}
                  required
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  className="block w-full p-2 border rounded"
                />
              </label>

              <label>
                Institution *
                <input
                  type="text"
                  name={`institution-${index}`}
                  required
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  className="block w-full p-2 border rounded"
                />
              </label>

              <label>
                Year of Passing *
                <input
                  type="text"
                  name={`yearOfPassing-${index}`}
                  required
                  value={edu.yearOfPassing}
                  onChange={(e) => handleEducationChange(index, 'yearOfPassing', e.target.value)}
                  className="block w-full p-2 border rounded"
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={addEducationField}
            className="text-blue-500 hover:underline"
          >
            + Add More Education
          </button>
        </div>

        {/* Skills */}
        <label>
          Skills *
          <textarea
            name="skills"
            required
            value={formData.skills}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            placeholder="List your skills separated by commas (e.g. JavaScript, React, Node.js)"
          />
        </label>

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
