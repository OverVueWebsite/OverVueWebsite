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
            ​<h3>Save and Import Prototype</h3>
            <p>To save your progress within the application, click the save button in the top right corner of the application and save your prototype progress as a JSON. You can then import that JSON file to bring back your progress and the application will repopulate the canvas.</p>
          </div>
          <img className="gif" alt="show grid density" src={save}></img>
        </div>
        <div className="desc">
          <div className="saveImport">
            <h3>Export Project Prototype</h3>
            <p>To export the project prototype, first click on the "Export" button in the top right corner. Click either "Your Project" to export a full project with boilerplate or click "Active Component" to export the specific component you created in the canvas.</p>
          </div>
          <img className="gif" alt="show grid density" src={exp}></img>
        </div>
      </div>
    </DocsLayout>
  );
}
