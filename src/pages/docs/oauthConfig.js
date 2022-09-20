import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
import oauthC from "../../assets/doc-data/oauthConfig.png"
import oauthCompo from "../../assets/doc-data/oauthCompo.png"

export default function oauthConfig() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Oauth configuration </h2>
        <div className="desc">
          <div className="saveImport">
            <h3>Replace Firebase config file values</h3>
            <p>Once you export your project, you will need to replace the example config file. First create a firebase account then go to the firebase config file. Once that is done, replace the FireBase config file values with your own. <a href="https://firebase.google.com/" style={{color:'blue'}}>https://firebase.google.com/</a></p>
          </div>
          <img className="gif" alt="" src={oauthC}></img>
        </div>
        <div className="desc">
          <div className="saveImport">
            <h3>Import OAuth component</h3>
            <p>If you included OAuth into your project export in the application, the project code will now display basic OAuth functionality, such as displaying the user name of the account logged in.</p>
          </div>
          <img className="gif" alt="" src={oauthCompo}></img>
        </div>
      </div>
    </DocsLayout>
  );
}