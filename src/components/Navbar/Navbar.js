import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";
 
// OG Nav Bar
export default function Navbar() {

  // Fetch Github stars at runtime
  const [starsCount, setStarsCount] = useState('')
  useEffect(() => {
    // Fetch data from Github api
    fetch('https://api.github.com/repos/open-source-labs/OverVue')
      .then(response => response.json())
      .then(data => {
        const starsRounded = (data.stargazers_count/1000).toFixed(1);
        setStarsCount(starsRounded + 'k');
      })
  }, [])
  
  return (
    <nav className="nav">
      <Link className="nav__logo" to={"/"}>
        <img src={logo} alt={"logo"} />
        Home
      </Link>
      <div className="nav__actions">
        <Link className="nav__action" to={"/docs"}>
          Docs
        </Link>
        <Link className="nav__action" to={"/ourteam"}>
          Our Team
        </Link>
        <a href="https://github.com/open-source-labs/OverVue">
          <img className='github_logo' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="black github logo"></img>
          {starsCount}
        </a>
      </div>
    </nav>
  );
}
