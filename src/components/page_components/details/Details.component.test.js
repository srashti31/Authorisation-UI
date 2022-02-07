import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import Details from "./Details.component";

configure({ adapter: new Adapter() });

describe("<Details />", () => {
    const props = {
        location: {
            setCustomerId: () => { },
            consumerId: "123",
            icon: "https://www.flaticon.com/premium-icon/icons/svg/2696/2696470.svg",
            tppName: "MoneyBee",
            consentGrantedDate: "3 July 2019",
            status: "Active",
            details: {
                productName: "Budget tracker",
                consentLink: "https://www.google.com/",
                transactions: {
                    sharing: [
                        "Incoming and outgoing transactions",
                        "Amounts",
                        "Dates",
                        "Description of transactions",
                        "Who you’ve sent money to and received money from (e.g. their name, BSB, account number)",
                    ],
                    historicalDate: "1st January 2017 ",
                },
                debits: ["Direct debits", "Scheduled payments"],
                keyDates: {
                    consentGiven: "3 July 2019",
                    lastDataRequest: "20 March 2020",
                    consentExpiry: "2 July 2020",
                },
                accounts: {
                    everydayAccount: "000-123 1123 3323",
                    savingsAccount: "000-123 7738 7383",
                },
            },
        },
    };
    it("should match snapshot", () => {
        const snapshot = renderer.create(<Details {...props} />).toJSON();
        expect(snapshot).toMatchSnapshot();
    });
    it("should render without crashing", () => {
        shallow(<Details {...props} />);
    });
    it("should open popup onclick of stop sharing button", () => {
        const wrapper = shallow(<Details {...props} />);
        let button = wrapper.find(".btton-stop-sharing");
        button.simulate("click");
        expect(wrapper.find("SharePopup").length).toBe(1);
    });
});
