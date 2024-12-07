
import { useState } from "react";
import axios from "axios";

export default function SubmitApplication() {
 
  


  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tenthcgpa: "",
    twelethcgpa: "",
    gradutioncgpa: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("tenthcgpa", formData.tenthcgpa);
    formDataToSend.append("twelethcgpa", formData.twelethcgpa);
    formDataToSend.append("gradutioncgpa", formData.gradutioncgpa);
    formDataToSend.append("resume", formData.resume);

    try {
      // Call the API
      await axios.post("https://launchyourfuturebackend.up.railway.app/applications/submitapplication", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Show success message
      setIsSubmitted(true);

      // Redirect to Track Applications page after 2 seconds
    alert("submitted")
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Submit Application</h1>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        {/* Display Job Details */}

        {/* Success Message */}
        {isSubmitted && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            Application Submitted Successfully! Redirecting...
          </p>
        )}

        {/* Application Form */}
        {!isSubmitted && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                required
              />
            </div>
            {/* 10th CGPA Field */}
            <div>
              <label htmlFor="tenthcgpa" className="block text-sm font-semibold mb-2">
                10th CGPA
              </label>
              <input
                id="tenthcgpa"
                type="number"
                step="0.01"
                value={formData.tenthcgpa}
                onChange={handleInputChange}
                placeholder="Enter your 10th CGPA"
                className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                required
              />
            </div>

            {/* 12th CGPA Field */}
            <div>
              <label htmlFor="twelethcgpa" className="block text-sm font-semibold mb-2">
                12th CGPA
              </label>
              <input
                id="twelethcgpa"
                type="number"
                step="0.01"
                value={formData.twelethcgpa}
                onChange={handleInputChange}
                placeholder="Enter your 12th CGPA"
                className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                required
              />
            </div>

            {/* Graduation CGPA Field */}
            <div>
              <label htmlFor="gradutioncgpa" className="block text-sm font-semibold mb-2">
                Graduation CGPA
              </label>
              <input
                id="gradutioncgpa"
                type="number"
                step="0.01"
                value={formData.gradutioncgpa}
                onChange={handleInputChange}
                placeholder="Enter your graduation CGPA"
                className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                required
              />
            </div>

            {/* Resume Upload Field */}
            <div>
              <label htmlFor="resume" className="block text-sm font-semibold mb-2">
                Upload Resume
              </label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full border rounded-lg p-3 text-gray-700 bg-white"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}