import React from 'react'

const appHeader = () => {
  return (
    <div className="wrapper">
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/" className="nav-link">Home</a>
      </li>
    </ul>

    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
          <i className="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  </div>
  )
}

export default appHeader