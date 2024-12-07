import { useState } from "react";
import Navbar from "./Navbar"; // Assuming you have a Navbar component

const JoinTalentNetworkPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to handle form submission

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Update the state to show the success message
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Include Navbar */}
      <Navbar />

      {/* Add padding to avoid overlapping with the fixed Navbar */}
      <div className="pt-20">
        {/* Header Section */}
        <header className="bg-black py-8 text-white text-center">
          <h1 className="text-4xl font-bold">Join Our Talent Network</h1>
          <p className="mt-2 text-lg">
            Connect with us to discover exciting career opportunities and stay updated on the latest news.
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-8 px-4">
          {!isSubmitted ? (
            // Display form when not submitted
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="interests" className="block text-gray-700 font-medium mb-2">
                  Areas of Interest
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  rows="4"
                  className="w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tell us about your career interests"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Join Now
              </button>
            </form>
          ) : (
            // Success Message
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Success!</h2>
              <p className="text-gray-700 mb-6">
                Thank you for joining our talent network. We’ll keep you updated on the latest opportunities
                and news.
              </p>
              <button
                onClick={() => setIsSubmitted(false)} // Option to go back to the form
                className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
              >
                Go Back
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default JoinTalentNetworkPage;
