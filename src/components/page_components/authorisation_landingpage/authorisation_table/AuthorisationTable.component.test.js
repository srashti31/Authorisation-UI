import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import AuthorisationTable from "./AuthorisationTable.component";

configure({ adapter: new Adapter() });

describe("<AuthorisationTable />", () => {
    const props = {
        statusChange: () => { },
        setSharingPopup: () => { },
        setStop: () => { },
        setCustomerId: () => { },
        setBankName: () => { },
        sharingPopup: true,
        rows: [
            {
                consumerId: "123",
                icon: "../../../images/ECorpBank.png",
                tppName: "E-Corp Bank",
                consentGrantedDate: "18/09/2019 5:00 PM",
                status: "Inactive",
                tppDetail: {
                    productName: "Budget Tracker",
                    consentLink: "https://www.google.com/",
                    transactions: {
                        sharing: [
                            "Incoming and outgoing transactions",
                            "Amounts",
                            "Dates",
                            "Description of transactions",
                            "Who you’ve sent money to and received money from (e.g. their name, BSB, account number)",
                        ],
                        historicalDate: "01/01/2017 5:00 PM ",
                    },
                    debits: ["Direct debits", "Scheduled payments"],
                    keyDates: {
                        consentGiven: "03/07/2019 12:00 PM",
                        lastDataRequest: "28/11/2019 7:00 AM",
                        consentExpiry: "18/09/2020 5:00 PM",
                    },
                    accounts: {
                        everydayAccount: "000-123 1123 3323",
                        savingsAccount: "000-123 7738 7383",
                    },
                    providers: ["A", "B"],
                },
                requestBreakdown: [
                    {
                        requestType: "Account List",
                        numberOfRequests: "3",
                        lastDataRequest: "18/09/2019 5:00 PM",
                        dates: [
                            {
                                dataRequested: "21/09/2019",
                                timeRequested: "5:00 PM"
                            },
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "3:00 PM"
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "9:00 PM"
                            }
                        ]
                    },
                    {
                        requestType: "Account Detail",
                        numberOfRequests: "2",
                        lastDataRequest: "18/09/2019 5:00 PM",
                        dates: [
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "5:00 PM"
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "5:00 PM"
                            }
                        ]
                    }
                ]
            },
        ]
    };


    // it("should match snapshot", () => {
    //   const snapshot = renderer.create(<AuthorisationTable {...props} />).toJSON();
    //   expect(snapshot).toMatchSnapshot();
    // });
    it("should render without crashing", () => {
        shallow(<AuthorisationTable {...props} />);
    });
    // it("should open popup onclick of view button", () => {
    //   const wrapper = shallow(<AuthorisationTable {...props} />);
    //   let button = wrapper.find(".btton-stop-sharing");
    //   button.simulate("click");
    //   expect(wrapper.find("SharePopup").length).toBe(1);
    // });
    // it("should simulate popup close", () => {
    //   const wrapper = shallow(
    //     <AuthorisationTable {...props} />
    //   );
    //   wrapper.find(".btton-stop-sharing").at(1).simulate("click", {});
    // });
});
