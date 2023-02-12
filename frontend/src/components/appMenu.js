import React from 'react'
import { Link } from "react-router-dom";


const appMenu = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    
    <a href="index3.html" className="brand-link">
      <img src="../assets/Style/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: ".8" }} />
      <span className="brand-text font-weight-light">VMS</span>
    </a>

    
    <div className="sidebar">
      
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="../assets/Style/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt='User Pic' />
        </div>
        <div className="info">
          <a href='#/' className="d-block">Alexander Pierce</a>
        </div>
      </div>

      
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feed" className="nav-link">
                <i className="nav-icon fas fa-info"></i>
                <p>Feed Appointment</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

export default appMenu
