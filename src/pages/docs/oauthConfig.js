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
            ​<h3>Replace config file </h3>
            Create firebase account/Create project with authentications/Get your firebase config/Replace the firebaseConfig file config with yours <a href="https://firebase.google.com/" style={{color:'blue'}}>https://firebase.google.com/</a>
          </div>
          <img className="gif" alt="" src={oauthC}></img>
        </div>
        <div className="desc">
          <div className="saveImport">
            ​<h3>Import Oauth component with Log In/Out </h3>
            You can import the Oauth component to the target file.
            Oauth component also has functionality showing up the username
            when user log in .
          </div>
          <img className="gif" alt="" src={oauthCompo}></img>
        </div>
        
        </div>
    </DocsLayout>
  );
}