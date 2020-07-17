import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Fabcar</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Query All Cars</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addcar" className="nav-link">Add New Car</Link>
          </li>
          <li className="navbar-item">
          <Link to="/changeowner" className="nav-link">Change Owner</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
