import { FaTh, FaBars, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './sidebar.css';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true); // Default to open sidebar
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    { path: "/", name: "Dashboard", icon: <FaTh /> },
    { path: "/about", name: "About", icon: <FaUserAlt /> },
    { path: "/analytics", name: "Analytics", icon: <FaRegChartBar /> },
    { path: "/comment", name: "Comment", icon: <FaCommentAlt /> },
    { path: "/addjob", name: "Add A Job", icon: <FaShoppingBag /> },
    { path: "/joblist", name: "View All Jobs", icon: <FaThList /> },
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
        </nav>
      </div>

      {/* Main Content */}
      <main className={`main-content ${isOpen ? "" : "collapsed"}`}>
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
