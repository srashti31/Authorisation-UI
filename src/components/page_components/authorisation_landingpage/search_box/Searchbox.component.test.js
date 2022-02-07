import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBox from "./Searchbox.component";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

describe("search box Component", () => {
    it("should match snapshot", () => {
        const snapshot = renderer.create(<SearchBox />).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
    it("should render without crashing", () => {
        shallow(<SearchBox />);
    });
    it("should simulate clear button ", () => {
        const wrapper = shallow(
            <SearchBox />
        );
        wrapper.find(".clear-search").at(0).simulate("click", {});
        expect(wrapper.find(".search-input").at(0).props().value).toEqual("");

    });
});
