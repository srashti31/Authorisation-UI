import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AuthorisationLandingPage from "./AuthorisationLandingPage.component";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("AuthorisationLandingPage Component", () => {
    // it("should match snapshot", () => {
    //   const snapshot = renderer.create(<AuthorisationLandingPage />).toJSON();
    //   expect(snapshot).toMatchSnapshot();
    // });
    it("should render without crashing", () => {
        shallow(<AuthorisationLandingPage />);
    });

});