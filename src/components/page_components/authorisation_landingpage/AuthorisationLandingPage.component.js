import React, { useState } from "react";
import PropTypes from "prop-types";
import SearchBox from "./search_box/Searchbox.component";
import { Tab, Tabs, Box } from "@material-ui/core";
import FilterTable from "./filter_table/FilterTable.component";
import AuthorisationTable from "./authorisation_table/AuthorisationTable.component";
import DataDisclosure from "./data_disclosure/DataDisclosure.component";
import StoppedSharing from "../stopped_sharing/StoppedSharing.component";
import "./authorisation_landingpage.css";
import "../../../css/authorisation.css";
import Title from "../title/Title.component";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const AuthorisationLandingPage = () => {
    const [value, setValue] = React.useState(0);
    const [filterValue, setFilterValue] = useState("ALL");
    const [stop, setStop] = useState(false);
    const [sharingPopup, setSharingPopup] = useState(false);
    const [customerId, setCustomerId] = useState(" ");
    const [bankName, setBankName] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const rowData = {
        customerName: "Peta Duelo ",
        customerId: "83468484",
        info: [
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
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "3:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "9:00 PM",
                            },
                        ],
                    },
                    {
                        requestType: "Account Detail",
                        numberOfRequests: "2",
                        lastDataRequest: "18/09/2019 5:00 PM",
                        dates: [
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "5:00 PM",
                            },
                        ],
                    },
                ],
            },
            {
                consumerId: "1245",
                icon: "../../../images/MoneyBee.png",
                tppName: "MoneyBee",
                consentGrantedDate: "10/07/2019 1:00 PM",
                status: "Active",
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
                        consentGiven: "03/07/2019 3:00PM",
                        lastDataRequest: "22/09/2019 4:00 PM",
                        consentExpiry: "10/07/2020 1:00 PM",
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
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "3:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "9:00 PM",
                            },
                        ],
                    },
                    {
                        requestType: "Account Detail",
                        numberOfRequests: "2",
                        lastDataRequest: "18/09/2019 5:00 PM",
                        dates: [
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "5:00 PM",
                            },
                        ],
                    },
                ],
            },
            {
                consumerId: "125",
                icon: "../../../images/PiggyBank.png",
                tppName: "Piggy Bank",
                consentGrantedDate: "04/05/2019 3:00 PM",
                status: "Active",
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
                        consentGiven: "03/07/2019 6:00AM",
                        lastDataRequest: "15/08/2019 5:00 PM",
                        consentExpiry: "04/05/2020 3:00 PM",
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
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "3:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "9:00 PM",
                            },
                        ],
                    },
                    {
                        requestType: "Account Detail",
                        numberOfRequests: "2",
                        lastDataRequest: "18/09/2019 5:00 PM",
                        dates: [
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "5:00 PM",
                            },
                        ],
                    },
                ],
            },
            {
                consumerId: "12457",

                icon: "../../../images/StandardBank.png",
                tppName: "Standard Bank ",
                consentGrantedDate: "22/10/2019 12:00 PM",
                status: "Active",
                tppDetail: {
                    productName: "Budget Tracker",
                    consentLink: "https://www.google.com/",
                    keyDates: {
                        consentGiven: "03/07/2019 5:00PM",
                        lastDataRequest: "10/07/2019 3:00 PM",
                        consentExpiry: "22/10/2020 12:00 PM",
                    },
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
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "3:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "9:00 PM",
                            },
                        ],
                    },
                    {
                        requestType: "Account Detail",
                        numberOfRequests: "2",
                        lastDataRequest: "18/09/2019 5:00 PM",
                        dates: [
                            {
                                dataRequested: "12/11/2019",
                                timeRequested: "5:00 PM",
                            },
                            {
                                dataRequested: "05/01/2020",
                                timeRequested: "5:00 PM",
                            },
                        ],
                    },
                ],
            },
        ],
    };

    const [rows, setData] = useState(rowData);

    const filterCallback = (value) => {
        setFilterValue(value);
    };
    const statusChange = (consumerId) => {
        if (consumerId === undefined) {
            rows.info.map((row) => {
                if (row.consumerId === customerId) {
                    row.status = "Inactive";
                }
                return row;
            });
            setData(rows);
            setCustomerId("");
        }
    };

    return (
        <React.Fragment>
            <Title />
            <SearchBox />
            <FilterTable filterCallback={filterCallback} filterValue={filterValue} />
            <div>
                <div className="customer-info">
                    <div className="customer-name">
            Customer name: {rows.customerName}
                    </div>
                    <div className="customer-id">Customer ID: {rows.customerId}</div>
                    <div className="download-popup-mainpage">
                        {stop ? <StoppedSharing bankName={bankName} /> : null}
                    </div>
                </div>

                <Tabs
                    orientation="horizontal"
                    className="nav-bar"
                    value={value}
                    onChange={handleChange}
                    aria-label="simple tabs example"
                >
                    <Tab className="tabs-text" label="AUTHORISATIONS" {...a11yProps(0)} />
                    <Tab
                        className="tabs-text"
                        label="DATA DISCLOSURE"
                        {...a11yProps(1)}
                    />
                </Tabs>
                <input
                    id="search"
                    className="table-search-input"
                    placeholder="Search..."
                />
                <TabPanel value={value} index={0}>
                    <AuthorisationTable
                        setStop={setStop}
                        rows={rows.info}
                        filterValue={filterValue}
                        statusChange={statusChange}
                        sharingPopup={sharingPopup}
                        setSharingPopup={setSharingPopup}
                        setCustomerId={setCustomerId}
                        setBankName={setBankName}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DataDisclosure
                        stop={stop}
                        setStop={setStop}
                        rows={rows.info}
                        filterValue={filterValue}
                        statusChange={statusChange}
                        customerId={customerId}
                        setCustomerId={setCustomerId}
                    />
                </TabPanel>
            </div>
        </React.Fragment>
    );
};
export default AuthorisationLandingPage;
