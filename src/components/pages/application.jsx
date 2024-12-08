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
    educationDetails: [{ degree: '', institution: '', yearOfPassing: '' }],
    skills: '',
  });

  const [formError, setFormError] = useState('');

  // Handle input change for text and select fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change and validate PDF
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setFormError('Please upload a valid PDF file for your resume.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) { // 10 MB size limit
        setFormError('File size exceeds 10MB');
        return;
      }
    }
    setFormError('');
    setFormData({ ...formData, resume: file });
  };

  // Handle education fields dynamically
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...formData.educationDetails];
    updatedEducation[index][field] = value;
    setFormData({ ...formData, educationDetails: updatedEducation });
  };

  const addEducationField = () => {
    if (formData.educationDetails.length >= 3) {
      setFormError('You can only add up to 3 education entries.');
      return;
    }
    setFormData({
      ...formData,
      educationDetails: [...formData.educationDetails, { degree: '', institution: '', yearOfPassing: '' }],
    });
    setFormError('');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    
    // Append fields as expected by the backend
    submissionData.append("jobId", formData.jobId);
    submissionData.append("firstName", formData.firstName);
    submissionData.append("lastName", formData.lastName);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("gender", formData.gender);
    submissionData.append("country", formData.country);
    submissionData.append("canVerifyWork", formData.canVerifyWork);
    if (formData.resume) submissionData.append("resume", formData.resume);
    submissionData.append("educationDetails", JSON.stringify(formData.educationDetails));
    submissionData.append("skills", formData.skills);

   
      console.log("Application submitted successfully:", response.data);
      navigate("/success");
    
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Submit Your Application</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className="text-xl font-bold">{job?.title}</p>

        {/* Display form errors */}
        {formError && <div className="text-red-500 mb-4">{formError}</div>}

        {/* Basic Details Section */}
        <label>
          First Name *
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            required
          />
        </label>

        <label>
          Last Name *
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            required
          />
        </label>

        <label>
          Phone *
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            required
          />
        </label>

        <label>
          Email *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            required
          />
        </label>

        <label>
          Resume *
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="block w-full p-2 border rounded"
            required
          />
        </label>

        {/* Gender Selection */}
        <div>
          <p className="font-semibold">Gender *</p>
          {['Male', 'Female', 'Other'].map((option) => (
            <label key={option} className="ml-2">
              <input
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
                onChange={handleChange}
                className="mr-2"
                required
              />
              {option}
            </label>
          ))}
        </div>

        {/* Country Dropdown */}
        <label>
          Country *
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            required
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
          </select>
        </label>

        {/* Can Verify Work Rights Dropdown */}
        <label>
          Can Verify Work Rights? *
          <select
            name="canVerifyWork"
            value={formData.canVerifyWork}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        {/* Education Section */}
        <div>
          <p className="text-lg font-semibold">Education Details *</p>
          {formData.educationDetails.map((edu, index) => (
            <div key={index}>
              <label>Degree *</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                className="block w-full p-2 border rounded"
                required
              />

              <label>Institution *</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                className="block w-full p-2 border rounded"
                required
              />

              <label>Year of Passing *</label>
              <input
                type="text"
                value={edu.yearOfPassing}
                onChange={(e) => handleEducationChange(index, 'yearOfPassing', e.target.value)}
                className="block w-full p-2 border rounded"
                required
              />
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

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
