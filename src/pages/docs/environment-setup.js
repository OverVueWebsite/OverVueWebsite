import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
import GridDensity from "../../assets/doc-data/GridDensity.jpg";
import OptionsPullDown from "../../assets/doc-data/optionspulldown.jpg"
import SlackOAuth from "../../assets/doc-data/SlackOAuth.jpg"
// import HeadTwoStyle from "../../styles/HeadTwoStyle.js";
import styled from "styled-components";
export default function EnvironmentSetup() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Setting Up Your OverVue Environment</h2>
        <div className="desc">
          <div>
            ​<h3>Setting Grid Density</h3>
            <p>A key feature of OverVue is the ability to dynamically change the grid layout of the prototyping canvas before you start. Within the navigation bar on the top of the application, there are two buttons: Height and Width. Click either to have the a pulldown menu show what how many grid lines you want in each axis.</p>
          </div>
          <img className="gif" alt="show grid density" src={GridDensity}></img>
        </div>
        <div className="desc">
          <div>
            ​<h3>Connect to Slack OAuth</h3>
            <p>OverVue offers Slack OAuth within the application to link your OverVue instance into any slack channel. After logging in, you can send a message to your Slack channel after saving the project.</p>
          </div>
          <img className="gif" alt="show grid density" src={SlackOAuth}></img>
        </div>
        <div className="desc">
          <div>
            ​<h3>Add Project TypeScript and OAuth </h3>
            <p>OverVue includes the feature to implement TypeScript and Google/Github OAuth when exporting your project prototype. To turn TypeScript or Oauth modes on or off, click on the Settings gear icon in the right corner of the nav bar and click the toggle at the bottom of the menu of each respective setting.</p>
          </div>
          <img className="gif" alt="show grid density" src={OptionsPullDown}></img>
        </div>
      </div>
    </DocsLayout>
  );
}
const Section = styled.div`
  display: flex;
  width: 100%;
  max-width: 1300px;
  justify-content: space-between;
  margin-bottom: 120px;

  h3 {
    margin-bottom: 1.5rem;
    color: #666666 !important;
  }
  p {
    color: #666666 !important;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.7rem;
  }
  h3::after {
    background: hsla(0, 0%, 56.5%, 0.5);
    content: "";
    display: block;
    height: 1.5px;
    margin: 20px 0px;
    
  }

  img {
    max-width: 500px;
    width: 100%;
    margin-right: 60px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    img {
      max-width: unset;
      margin: 0px;
      margin-bottom: 32px;
    }
  }
`