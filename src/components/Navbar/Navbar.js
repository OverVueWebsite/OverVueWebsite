import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../../assets/logo/overvue-nav.png";
import "./navbar.css";
 
// OG Nav Bar
export default function Navbar() {

  // Fetch Github stars at runtime
  const defaultStars = '2.3k'; // Use this number if github fetch fails

  const [starsCount, setStarsCount] = useState('');
  useEffect(() => {
    // Check localStorage for starCount, if present use that starsCount 
    const localStorageStars = JSON.parse(window.localStorage.getItem('starsCount'));
    if (!localStorageStars) {
      setStarsCount(localStorageStars + 'k');
    }
    // Retrieve from Github if not present
    else{
      // Fetch data from Github api
      fetch('https://api.github.com/repos/open-source-labs/OverVue')
        .then(response => {
          if (response.status === 403) {
            throw new Error('403 error');
          }
          else return response.json()
        })
        .then(data => {
          console.log('fetching stars...')
          const starsRounded = (data.stargazers_count/1000).toFixed(1);
          window.localStorage.setItem('starsCount', starsRounded);
          setStarsCount(starsRounded + 'k');
        })
        .catch((error) => {
          console.log(error);
          setStarsCount(defaultStars);
        })
      };
  }, [])

  return (
    <nav className="nav">
      <Link className="nav_logo" to={"/"}>
        <img class="overVue_logo" src={logo} alt={"logo"} />
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
