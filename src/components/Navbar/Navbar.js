import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";
 

// OG Nav Bar
export default function Navbar() {

  // Client-side runtime data fetching of OverVue Github stars
  const [starsCount, setStars] = useState('')
  useEffect(() => {
    fetch('https://api.github.com/repos/open-source-labs/OverVue')
    .then(response => response.json())
    .then(resultData => {
      // roundedStars = (resultData.stargazers_count1000).toFixed(1)
      // console.log(roundedStars);
      console.log(resultData.stargazers_count/1000);
      const roundedStars = (resultData.stargazers_count/1000).toFixed(1) + 'K';
      console.log(roundedStars);
      setStars(roundedStars)
    })
  }, [])

  return (
    <nav className="nav">
      <Link className="nav_logo" to={"/"}>
        {/* <img class="overVue_logo" src={logo} alt={"logo"} /> */}
        OVERVUE
      </Link>
      <div className="nav_actions">
        <Link className="nav_docs" to={"/docs"}>
          Docs
        </Link>
        <Link className="nav_ourTeam" to={"/ourteam"}>
          Our Team
        </Link>
        <a className="github_button" href="https://github.com/open-source-labs/OverVue">
          <img className='github_logo' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt="black github logo"></img>
          {starsCount}
        </a>
      </div>
    </nav>
  );
}
