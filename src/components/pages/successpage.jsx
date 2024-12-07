import { Button } from "@/components/ui/button"; // Assuming you are using your custom button component
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="text-center bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <h1 className="text-3xl font-semibold text-green-600">Application Successful!</h1>
        <p className="mt-4 text-gray-600">You have successfully applied for this job.</p>
        <Button
          onClick={goHome}
          className="mt-6 bg-blue-500 text-white hover:bg-blue-600 w-full"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;
