import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
import save from "../../assets/doc-data/save.gif"
import exp from "../../assets/doc-data/export.gif"

export default function SaveAndExport() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Save and Export Your Projects</h2>
        <div className="desc">
          <div className="saveImport">
            ​<h3>Save and import </h3>
            <p>Saving and importing json object of Overvue instance</p>
          </div>
          <img className="gif" alt="show grid density" src={save}></img>
        </div>
        <div className="desc">
          <div >
            ​<h3>Export </h3>
            <p>Exporting full boilerplate code/Exporting individual component code</p>
          </div>
          <img className="gif" alt="show grid density" src={exp}></img>
        </div>​
     
       
      </div>
    </DocsLayout>
  );
}
