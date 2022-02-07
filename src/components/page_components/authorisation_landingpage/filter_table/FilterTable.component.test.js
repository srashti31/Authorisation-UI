import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import FilterTable from "./FilterTable.component";

configure({ adapter: new Adapter() });

describe("FilterTable Component", () => {
    it("should match snapshot", () => {
        const snapshot = renderer.create(<FilterTable />).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
    it("should render without crashing", () => {
        mount(<FilterTable />);
    });
    it("should able to filter", () => {
        const mockFilterCallback = (value) => {
            expect(value).toEqual("ALL");
        };
        const wrapper = shallow(
            <FilterTable filterCallback={mockFilterCallback} filterValue={"ALL"} />
        );
        let filter = wrapper.find("select.filter-option");
        filter.simulate("change", { target: { value: "ALL" } });
    });
});