import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Shadcn UI card components
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
        {/* Hero Section with background image and clear text */}
        <section
  className="relative text-center py-10 sm:py-20 bg-cover bg-center"
  style={{
    backgroundImage: `url('/jobhire.webp')`,
    height: '400px', // Reduced height
    backgroundSize: 'cover', 
    backgroundPosition: 'top', 
    backgroundRepeat: 'no-repeat'
  }}
>
  <h1 className="relative flex flex-col items-center justify-center font-light text-4xl sm:text-6xl tracking-wide py-4 text-white">
    Your Dream Job Awaits
 </h1>


          <h1 className="relative flex flex-col items-center justify-center font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-wide py-4 text-white">
          </h1>
          <p className="relative text-white sm:mt-4 text-sm sm:text-lg font-medium leading-relaxed">
            Explore thousands of job listings or find the perfect candidate.
          </p>

          {/* Single Explore Jobs Button with Blue Color */}
          <div className="relative flex justify-center mt-10 ">
            <Link to={"/jobs"}>
              <Button className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg px-8 py-3 text-lg sm:text-xl font-semibold shadow-lg transition-all duration-300">
                Explore Jobs
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Jobs or Services Section */}
        <section className="featured-services bg-gray-50 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Explore Featured Categories</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {/* Card for each service or job category */}
              <Card className="max-w-xs rounded-lg shadow-lg bg-white p-6 hover:shadow-xl transition-all duration-300">
                <CardTitle className="text-center text-xl font-semibold text-gray-900">Design & Creative</CardTitle>
                <CardDescription className="text-center text-sm text-gray-600 mt-2">Find creative job listings in design and creative fields.</CardDescription>
                <CardContent className="flex justify-center mt-4">
                  <Link to="/jobs">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300">
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="max-w-xs rounded-lg shadow-lg bg-white p-6 hover:shadow-xl transition-all duration-300">
                <CardTitle className="text-center text-xl font-semibold text-gray-900">Technology</CardTitle>
                <CardDescription className="text-center text-sm text-gray-600 mt-2">Browse jobs in technology, from development to support.</CardDescription>
                <CardContent className="flex justify-center mt-4">
                  <Link to="/jobs">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300">
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="max-w-xs rounded-lg shadow-lg bg-white p-6 hover:shadow-xl transition-all duration-300">
                <CardTitle className="text-center text-xl font-semibold text-gray-900">Marketing</CardTitle>
                <CardDescription className="text-center text-sm text-gray-600 mt-2">Discover marketing jobs, including digital and traditional roles.</CardDescription>
                <CardContent className="flex justify-center mt-4">
                  <Link to="/jobs">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-8 py-3 text-lg font-semibold shadow-lg transition-all duration-300">
                      Explore
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-choose-us bg-blue-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Us?</h2>
            <p className="text-lg text-gray-700 mb-6">We connect job seekers with their ideal employers. Our platform offers exclusive job opportunities, seamless application processes, and personalized career support.</p>

            {/* Benefits List */}
            <div className="flex flex-wrap justify-center gap-10">
              <div className="benefit-item max-w-xs bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Wide Range of Jobs</h3>
                <p className="text-sm text-gray-600">From tech to marketing, explore jobs across multiple sectors.</p>
              </div>

              <div className="benefit-item max-w-xs bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Easy Application Process</h3>
                <p className="text-sm text-gray-600">Apply in just a few clicks and track your progress.</p>
              </div>

              <div className="benefit-item max-w-xs bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-4">Personalized Support</h3>
                <p className="text-sm text-gray-600">Get advice and resources tailored to your career goals.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
