import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Accounts from "./Accounts.component";

configure({ adapter: new Adapter() });

describe("<Accounts />", () => {
    it("should match snapshot", () => {
        const accounts = {
            everydayAccount: "000-123 1123 3323",
            savingsAccount: "000-123 7738 7383",
        };
        const snapshot = renderer.create(<Accounts accounts={accounts} />).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
    it("should render without crashing", () => {
        const accounts = {
            everydayAccount: "000-123 1123 3323",
            savingsAccount: "000-123 7738 7383",
        };
        shallow(<Accounts accounts={accounts} />);
    });
});
