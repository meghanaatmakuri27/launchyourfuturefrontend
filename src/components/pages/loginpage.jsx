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
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

export function Login() {
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
      const response = await axios.post("https://launchyourfuturebackend.up.railway.app/student/checkstudentlogin", formData);
      const token = response.data;

      // Store the token in localStorage or sessionStorage
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userEmail", formData.email);
      navigate("/");
    } catch (error) {
      setError("Login failed. Please try again.");
      console.log(error);
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

      {/* Right side with the login card */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Student Login</CardTitle>
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
                {/* Login Button */}
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </Button>
                {/* Link to Signup */}
                <p className="text-sm text-gray-600">
  Don&#39;t have an account?{" "}
  <Link to="/signup" className="text-blue-500 hover:underline">
    Signup here
  </Link>
  
</p>
<div className="flex flex-col space-y-2 ">
                  <p className="text-sm text-gray-600">
                    Click here to log in as employee{" "}<span>
                    <Link to="/employee/login" className="text-blue-500 hover:underline">
                      EmployeeLogin
                    </Link></span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Click here to log in as admin{" "}
                    <Link to="/admin/login" className="text-blue-500 hover:underline">
                      AdminLogin
                    </Link>
                  </p>
                </div>

              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
