import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ViewDatesPopup from "./ViewDatesPopup.component";

configure({ adapter: new Adapter() });

describe("ViewDatesPopup Component", () => {
    const props = {
        viewpopup: true,
        setViewPopup: () => { },
        date: [
            {
                dataRequested: "21/09/2019",
                timeRequested: "5:00 PM"
            },
            {
                dataRequested: "12/11/2019",
                timeRequested: "3:00 PM"
            }
        ],
    };
    it("should render without crashing", () => {
        shallow(<ViewDatesPopup {...props} />);
    });
  
    it("should simulate popup close", () => {
        const wrapper = shallow(
            <ViewDatesPopup {...props}  />
        );
        wrapper.find(".close-btn").at(0).simulate("click", {});
    });
});