import React from "react";
import renderer from "react-test-renderer";
import ComponentStyling from "../../pages/docs/component-styling";
import CreateComponent from "../../pages/docs/create-component";
import EnvironmentSetup from "../../pages/docs/environment-setup";
import HierarchyVisualization from "../../pages/docs/hierarchy-visualization";
import Docs from "../../pages/docs/index";
import Contribute from "../../components/Contribute.js";

describe("Adding documentation tabs", () => {
  it("renders docs getting started correctly", () => {
    const tree = renderer
        .create(<Docs />)
        .toJSON()
    expect(tree).toMatchSnapshot();
  });
  it("renders styling component correctly", () => {
      const tree = renderer
          .create(<ComponentStyling />)
          .toJSON()
      expect(tree).toMatchSnapshot();
  });
  it("renders create component correctly", () => {
    const tree = renderer
        .create(<CreateComponent />)
        .toJSON()
    expect(tree).toMatchSnapshot();
  });
  it("renders environment setup correctly", () => {
    const tree = renderer
        .create(<EnvironmentSetup />)
        .toJSON()
    expect(tree).toMatchSnapshot();
  });
  it("renders hierarchy visualization correctly", () => {
    const tree = renderer
        .create(<HierarchyVisualization />)
        .toJSON()
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly", () => {
    const tree = renderer
        .create(<Contribute />)
        .toJSON()
    expect(tree).toMatchSnapshot();
  });
});
