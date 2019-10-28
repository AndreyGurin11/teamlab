import React from "react";
import "../navbar/navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header-bottom-right col-9">
                <div className="menu-wrap">
                  <input type="checkbox" className="toggler" />
                  <div className="hamburger"><div></div></div>
                  <div className="menu">
                    <div>
                      <div>
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="about">About</Link>
                          </li>
                          <li>
                            <Link to="projects">Projects</Link>
                          </li>
                          <li>
                            <Link to="news">News</Link>
                          </li>
                          <li>
                            <Link to="faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="posts">Posts</Link>
                          </li>
                          <li>
                            <Link to="contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="login">Login</Link>
                          </li>
                          <li>
                            <Link to="register">Register</Link>
                          </li>
                          <li>
                            <Link to="profile">Profile</Link>
                          </li>
            
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>


                <nav className="main-nav">
                  <ul className="main-nav-list">
                  <li className="item">
                            <Link to="/" className="link-nav">Home</Link>
                          </li>
                          <li className="item">
                            <Link to="about"  className="link-nav">About</Link>
                          </li>
                          <li className="item">
                            <Link to="projects" className="link-nav">Projects</Link>
                          </li>
                          <li className="item">
                            <Link to="news" className="link-nav">News</Link>
                          </li>
                          <li className="item">
                            <Link to="faq" className="link-nav">FAQ</Link>
                          </li>
                          <li className="item">
                            <Link to="posts" className="link-nav">Posts</Link>
                          </li>
                          <li className="item">
                            <Link to="contact" className="link-nav">Contact</Link>
                          </li>
                          <li className="item">
                            <Link to="login" className="link-nav">Login</Link>
                          </li>
                          <li className="item">
                            <Link to="register" className="link-nav">Register</Link>
                          </li>
                          <li className="item">
                            <Link to="profile" className="link-nav">Profile</Link>
                          </li>
                  </ul>
                </nav>

                </div>

     
  );
};

export default NavBar;