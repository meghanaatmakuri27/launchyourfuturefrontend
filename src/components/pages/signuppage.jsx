import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
        const response = await axios.post(
            "https://launchyourfuturebackend.up.railway.app/student/addstudent",
            formData, // Direct JSON data
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true, // Allow credentials
            }
        );
        console.log("Signup successful:", response.data);
        navigate("/login");
    } catch (error) {
        console.error("Error during signup:", error);
        setError("Signup failed. Please try again.");
    } finally {
        setLoading(false);
    }
};

  return (
    <div className="flex min-h-screen">
      {/* Left side with image */}
      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url('/landing-background1.jpg')` }}
      ></div>

      {/* Right side with the signup card */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>Enter your email and password to continue.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* Email input */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password input */}
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-center mt-2">{error}</p>} {/* Display error message */}
              <CardFooter className="flex flex-col items-center justify-between gap-4 mt-4">
                {/* Signup Button */}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Signing up..." : "Signup"}
                </Button>
                {/* Link to Login */}
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Login here
                  </Link>
                </p>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
