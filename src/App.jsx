import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landingpage'; // Ensure correct path
import { Login } from './components/pages/loginpage';
import { Signup } from './components/pages/signuppage';
import JobPage from './components/pages/job';
import ProfilePage from './components/pages/Profile';
import JobForm from './components/pages/addjob';
import JobList from './components/pages/joblist';
import JobDetail from './components/pages/jobdetail'; // Assuming this is the page for detailed job view
import JobEditForm from './components/pages/editjob';
import ApplicationForm from './components/pages/application';
import Applications from './components/pages/applications';
import { AdminLogin } from './components/pages/adminloginpage';
import EmployeeForm from './components/pages/employeeform';
import EmployeeTable from './components/pages/employeetable';
import { EmployeeLogin } from './components/pages/employeelogin';
import EmployeeEditForm from './components/pages/employeeeditform'; // Import the employee edit form
import AdminSidebar from './components/pages/adminsidebar';
import EmployeeSidebar from './components/pages/employeesidebar';
import SuccessPage from './components/pages/successpage';
import Dashboard from './components/pages/dashboard';
import AboutEmployee from './components/pages/employeeaboutus';
import AnalyticsDashboard from './components/pages/analyticsdashboard';
import AdminDashboard from './components/pages/admindashboard';
import AdminAboutPage from './components/pages/adminabout';
import AboutUsPage from './components/pages/aboutus';
import JoinTalentNetworkPage from './components/pages/jointalentnetwork';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Updated sidebar path */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/addjob" element={<JobForm />} />
        <Route path="/joblist" element={<JobList />} /> {/* Updated to "joblist" */}
        <Route path="/job/:id" element={<JobDetail />} /> {/* Route for job details */}
        <Route path="/job/edit/:id" element={<JobEditForm />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/addemployee" element={<EmployeeForm />} />
        <Route path="/employeelist" element={<EmployeeTable />} />
        <Route path="/employee/login" element={<EmployeeLogin />} />
        <Route path="/employee/edit/:id" element={<EmployeeEditForm />} /> {/* Added route for editing employee */}
        <Route path="/admindashboard" element={<AdminSidebar/>}/>
        <Route path="/employeedashboard" element={<EmployeeSidebar/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
        <Route path="/employeedashboard1" element={<Dashboard/>}/>
        <Route path="/employeeabout" element={<AboutEmployee/>}/>
        <Route path="/analytics" element={<AnalyticsDashboard/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/adminabout" element={<AdminAboutPage/>}/>
        <Route path="/about" element={<AboutUsPage/>}/>
        <Route path="/joinnetwork" element={<JoinTalentNetworkPage/>}/>
      </Routes>
    </>
  );
};

export default App;
