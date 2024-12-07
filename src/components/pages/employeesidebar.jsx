import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaShoppingBag, FaThList, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import './sidebar.css';

const EmployeeSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open sidebar
  const navigate = useNavigate();
  
  // Logout function
  const logout = () => {
    // Clear any user session data (e.g., localStorage, cookies, etc.)
    localStorage.removeItem('employeeEmail'); // Assuming you're storing user info in localStorage
    // Redirect to the login page
    navigate("/employee/login"); // Update the path if the login page is different
  };

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    { path: "/employeedashboard1", name: "Dashboard", icon: <FaTh /> },
    { path: "/employeeabout", name: "About", icon: <FaUserAlt /> },
    { path: "/analytics", name: "Analytics", icon: <FaRegChartBar /> },
    { path: "/addjob", name: "Add A Job", icon: <FaShoppingBag /> },
    { path: "/joblist", name: "View All Jobs", icon: <FaThList /> },
    { path: "/applications", name: "View All Applications", icon: <FaThList /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "" : "collapsed"}`}>
        <div className="sidebar-header">
          <h1 style={{ display: isOpen ? "block" : "none" }}>Launch Your Future</h1>
          <FaBars className="toggle-btn" onClick={toggle} />
        </div>
        <nav className="nav-links">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="nav-item"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <span>{item.name}</span>
            </NavLink>
          ))}
          <button onClick={logout} className="logout-btn">
          <FaSignOutAlt /> Logout
        </button>
        </nav>

        {/* Logout Button */}
        
      </div>

      {/* Main Content */}
      <main className={`main-content ${isOpen ? "" : "collapsed"}`}>
        {children}
      </main>
    </div>
  );
};

export default EmployeeSidebar;
