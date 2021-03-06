import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-aqua">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Credit Card
        </Link>
        <Link className="navbar-item" to="/products">
          Auto Loans
        </Link>
        <Link className="navbar-item" to="/about">
          Personal Loans
        </Link>
        <Link className="navbar-item" to="/products">
          Banking
        </Link>
        <Link className="navbar-item" to="/about">
          Mortages
        </Link>
        <Link className="navbar-item" to="/products">
          Insurance
        </Link>
        <Link className="navbar-item" to="/about">
          MMoney
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/vineet-c/NETLIFYcms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
