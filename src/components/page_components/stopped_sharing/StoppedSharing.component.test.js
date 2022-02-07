import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import StoppedSharing from "./StoppedSharing.component";

configure({ adapter: new Adapter() });

describe("<StoppedSharing />", () => {
    it("should match snapshot", () => {
        const snapshot = renderer.create(<StoppedSharing />).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
    it("should render without crashing", () => {
        shallow(<StoppedSharing />);
    });
});
