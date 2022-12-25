import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar --> */}
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/dashboard"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link to="/dashboard">
          <div className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </div>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Add user Collapse Menu --> */}
      <li className="nav-item">
        <Link to="/add-user">
          <div
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Add User</span>
          </div>
        </Link>
      </li>

      {/* <!-- Nav Item - Edit user Collapse Menu --> */}
      <li className="nav-item">
        <Link to="/edit-user/0">
          <div
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Edit User</span>
          </div>
        </Link>
      </li>

      {/* <!-- Nav Item - Nested example component -->*/}
      <li className="nav-item">
        <Link to="/nested-example">
          <div
            className="nav-link collapsed"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Nested Component</span>
          </div>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />
    </ul>
  );
}

export default Sidebar;
 