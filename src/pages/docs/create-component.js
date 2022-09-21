import React from "react";
import { DocsLayout } from "../../layouts";
import "../../styles/docs.css";
import Codesnippet from "../../assets/doc-data/Codesnippet.jpg";
import CreateComponentPic from "../../assets/doc-data/createcomponent.jpg";
import CreateElementPlus from "../../assets/doc-data/createlementplus.jpg";
import AddingProps from "../../assets/doc-data/addingprops.jpg";

export default function CreateComponent() {
  return (
    <DocsLayout>
      <div className="docs__content">
        <h2>Creating New Components</h2>​
        <div className="desc">
          <div>
          <h3>Create New Components</h3>
            <p>Under the Create Component menu in the left sidebar, set a component name (required) and optionally select a parent component, and/or html elements to be nested inside the component. Then at the bottom of the menu, click on "Create Component".</p>
            <p>Additionally, you can search for previously created components on the canvas here.</p>
          </div>
          <img className="gif" alt="create component" src={CreateComponentPic} style={{maxWidth:'650px'}}></img>
        </div>
        <div className="desc">
          <div>
          <h3>Using Element Plus Components</h3>
            <p>OverVue now has a new feature to add Element Plus components to quickly style your project prototype components. </p>
            <p>
              To add a Element Plus component, first click the Import Element+ button. Click on the "Select Library Component" pulldown menu and a list of available Element Plus components will pop up. After selecting the Element Plus components you want, it should now show in the list of HTML elements to select.
            </p>
          </div>
          <img className="gif" alt="element plus" src={CreateElementPlus} style={{maxWidth:'650px'}}></img>
        </div>
        <div className="desc">
          <div>
          <h3>Adding Additional Component Properties</h3>
            <p>To edit a component, select the component on the canvas and an Update Component menu will appear in the left sidebar. To update the name, enter the new name in the field and click enter.</p>
            <p>There are multiple ways to add attributes. One method is to click on the Component Attributes drop down button. Specify the attribute by selecting either id or class. Click the save or enter to apply the attribute. </p> 
            <p>Another method is to double click the purple HTML tag. Above the styling options are inputs for class, two-way binding, and inner text. Make sure to click on the submit icon located inside the input to apply your changes. </p>
            <p>To nest components, first navigate to the component you wish to be the parent, then add the child component to the "Add/remove children" drop down button.</p>
            <p>To add state or actions to a component, they must first be added to the store. Under the Store tab, click on Store State or Store Actions, enter the name and click the ‘+’ or press enter. Then, select the component to which you want to add state or actions. In the State or Actions sub-menus in the Update Component menu of the left sidebar, select your desired state(s) or action(s) from the dropdown and click ‘Map State’ or ‘Map Actions’. To remove them, click the ‘x’ icon on the right side of the state or action.</p>
            <p>To delete a component, select it and click "Delete Currently Selected" in the Update Component menu.</p>
          </div>
          <img className="gif" alt="add class and more" src={AddingProps} style={{maxWidth:'650px'}}></img>
        </div>
        <div className="desc">
          <div>
          <h3>Component Styling</h3>
            <p>After adding a component class name, under the component details tab, you can access details about the active/selected component - including a code snippet (live generated boilerplate code), the HTML elements, state, actions or props in the component. The code snippet dynamically renders grid area position, color, and size of the component.</p>
          </div>
          <img className="gif" alt="component styling" src={Codesnippet} style={{maxWidth:'650px'}} ></img>
        </div>
      </div>
    </DocsLayout>
  );
}
