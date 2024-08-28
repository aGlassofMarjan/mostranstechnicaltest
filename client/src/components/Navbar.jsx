// app/components/Navbar.js
"use client";

import Link from "next/link";
import { useTheme } from '@/context/Themecontext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${theme === "light" ? "navbar-light bg-light" : "navbar-dark bg-dark"}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Mostrans</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href={"/character-list"} className="nav-link active" aria-current="page">Characters</Link>
              </li>
              <li className="nav-item">
                <Link href={"/character-by-location"} className="nav-link active" aria-current="page">Assigned Locations</Link>
              </li>
              <li className="nav-item">
                {/* Theme toggle button */}
                <button className={`btn ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"}`} onClick={toggleTheme}>
                  Change Theme
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;