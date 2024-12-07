import Navbar from "./navbar"; // Assuming you have a Navbar component

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Include Navbar */}
      <Navbar />

      {/* Add padding to avoid overlapping with the fixed Navbar */}
      <div className="pt-20"> {/* Adjust this padding as per your Navbar height */}
        {/* Header Section */}
        <header className="bg-black py-8 text-white text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-lg">Empowering You to Launch Your Future</p>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto py-8 px-4">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At Launch Your Future, our mission is to help individuals and organizations achieve their
              dreams by providing them with the right tools, opportunities, and guidance. We strive to
              create a platform that bridges the gap between aspirations and achievements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a world where everyone has equal access to the resources they need to succeed,
              fostering innovation, creativity, and collaboration.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Comprehensive career guidance and mentorship programs</li>
              <li>State-of-the-art tools for skill development and assessment</li>
              <li>Collaborative platforms for networking and growth</li>
              <li>Access to a community of like-minded individuals</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutUsPage;
