import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";

export default function Routes() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Routes</h2>​
        <ul>
          <li>
            Create custom boilerplate code for Vue 3.0 applications
          </li>
          <li>
            Visualize component hierarchies in real time
          </li>
          <li>
            Quickly produce product prototypes with snap-to-grid positioning
          </li>
          <li>
            Make use of the popular Vue component library element+
          </li>
        </ul>
        <h2>Hierarchy Visualization</h2>​
        <ul>
          <li>
            intro to benefit(s) of hierarchy visualization
          </li>
          <li>
            how to use
          </li>
          <li>
            extra
          </li>
        </ul>
      </div>
    </DocsLayout>
  );
}
