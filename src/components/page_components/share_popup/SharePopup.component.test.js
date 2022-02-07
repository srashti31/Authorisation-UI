import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SharePopup from "./SharePopup.component";

configure({ adapter: new Adapter() });

describe("<SharePopup />", () => {
    const props = {
        adrName: "Money Bee",
        sharingPopup: true,
        transactionDetails: "TransactionDetails",
        debitDetails: "DebitDetails",
        setSharingPopup: () => { },
        setStop: () => { },
        statusChange: () => { },
        setDetailStatus: () => { },
        consumerId: "12345"
    };
    it("should render without crashing", () => {
        shallow(<SharePopup {...props} />);
    });
    it("should not render Transactions and Debits", () => {
        const wrapper = shallow(
            <SharePopup {...props} transactionDetails="" debitDetails="" />
        );
        expect(wrapper.find(".info-title")).toHaveLength(0);
    });
    it("should simulate popup close", () => {
        const wrapper = shallow(
            <SharePopup {...props} transactionDetails="" debitDetails="" />
        );
        wrapper.find(".btn-cancel").at(0).simulate("click", {});
    });
    it("should simulate stop sharing", () => {
        const wrapper = shallow(
            <SharePopup {...props} transactionDetails="" debitDetails="" />
        );
        wrapper.find(".btn-confirm").at(0).simulate("click", {});
    });
});
