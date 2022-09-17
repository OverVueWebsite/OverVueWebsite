import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function EnvironmentSetup() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Setting Up Your OverVue Environment</h2>
        ​<h3>Setting Grid Density</h3>
        <p>A key feature of OverVue is the ability to dynamically change the grid layout of the prototyping canvas before you start. Within the navigation bar on the top of the application, there are two buttons: Height and Width. Click either to have the a pulldown menu show what how many grid lines you want in each axis.</p>
        <img className="shadow" alt="show grid density" src="./gridDensity.gif"></img>
        <ul>
          <li>
            connecting to slack
          </li>
          <li>
            selecting Oauth and typescript options
          </li>
          <li>
            anything else you wanna add
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
