import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
import Codesnippet from "../../assets/doc-data/Codesnippet.jpg"
export default function CreateComponent() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Creating New Components</h2>​
        <ul>
          <li>
            creating new component
          </li>
          <li>
            using element + components
          </li>
          <li>
            adding classes, id, parent/child, 
          </li>
          <li>
            editing components
          </li>
        </ul>
        <h2>Component Styling</h2>
        <div className="desc">
          <div>
          <h3>Component Details</h3>
            <p>After adding a component class name, under the component details tab, you can access details about the active/selected component - including a code snippet (live generated boilerplate code), the HTML elements, state, actions or props in the component. The code snippet dynamically renders grid area position, color, and size of the component. Additionally OverVue can now make use of the popular Vue component Library Element Plus.</p>
          </div>
          <img className="gif" alt="codesnippet" src={Codesnippet}></img>
        </div>
      </div>
    </DocsLayout>
  );
}
