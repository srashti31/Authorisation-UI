import React, { useState } from "react";
import {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanel,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../../../css/data_disclosure.css";
import { makeStyles } from "@material-ui/core/styles";
import ViewDatesPopup from "../../view_dates_popup/ViewDatesPopup.component";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    accordion: {
        marginTop: "0",
        marginBottom: "0",
    },
    panel: {
        height: "44px",
        margin: "0",
    },
    panelcontainer: {
        height: "7rem",
    },
    root: {
        margin: "0px",
    },
    icon: {
        marginRight: "3rem",
    },
});

const DataDisclosure = ({
    rows,
    filterValue,
    statusChange,
    setSharingPopup,
    sharingPopup,
    setCustomerId,
}) => {
    const [viewpopup, setViewPopup] = useState(false);
    const [date, setDate] = useState([]);
    const classes = useStyles();
    return (
        <React.Fragment>
            <ViewDatesPopup
                viewpopup={viewpopup}
                setViewPopup={setViewPopup}
                date={date}
            />
            <div className="data-disclosure-div">
                <table className="header-table">
                    <thead className="data-Header">
                        <td className="head-tpp">Organisation</td>
                        <td className="head-consentGranted">Consent granted</td>
                        <td className="head-date">Last date data requested</td>
                        <td className="head-expiry">Consent expiry</td>
                        <td className="head-status">Status</td>
                        <td className="head-deatls">Details</td>
                        <td className="head-request">Request Breakdown</td>
                    </thead>
                </table>
                {rows
                    .filter((d) => filterValue === "ALL" || d.status === filterValue)
                    .map((data) => (
                        <ExpansionPanel className={classes.root}>
                            <ExpansionPanelSummary
                                className={classes.panel}
                                expandIcon={<ExpandMoreIcon className={classes.icon} />}
                            >
                                <div className="row-div">
                                    <div className="row-tppName">{data.tppName}</div>
                                    <div className="row-date">{data.consentGrantedDate}</div>
                                    <div className="row-keydates">
                                        {data.tppDetail.keyDates.lastDataRequest}
                                    </div>
                                    <div className="row-expiry">
                                        {data.tppDetail.keyDates.consentExpiry}
                                    </div>
                                    <div className="row-status">
                                        {data.status === "Active" ? (
                                            <button className="tpp-status-active">ACTIVE</button>
                                        ) : (
                                            <button className="tpp-status-inactive">INACTIVE</button>
                                        )}
                                    </div>
                                    <div>
                                        <button className="btton-show-details">
                                            <NavLink
                                                className="show-details-link"
                                                exact
                                                to={{
                                                    pathname: "/detail",
                                                    details: data.tppDetail,
                                                    tppName: data.tppName,
                                                    icon: data.icon,
                                                    status: data.status,
                                                    setSharingPopup: setSharingPopup,
                                                    sharingPopup: sharingPopup,
                                                    statusChange: statusChange,
                                                }}
                                            >
                        Show Details
                                            </NavLink>
                                        </button>
                                    </div>
                                </div>
                            </ExpansionPanelSummary>

                            <ExpansionPanelDetails className={classes.panelcontainer}>
                                <div className="table-div">
                                    <table className="detail-table">
                                        <tbody className="details-body">
                                            <tr className="details-row">
                                                <td className="row-heading-1">Request Type</td>
                                                <td className="row-heading-2">Number of Requests</td>
                                                <td className="row-heading-3">
                          Last Data Request Made
                                                </td>
                                                <td className="row-heading-4">More Request Dates</td>
                                                <td className="empty-row"></td>
                                            </tr>
                                            {data.requestBreakdown.map((req) => (
                                                <tr>
                                                    <td className="row-data">{req.requestType}</td>
                                                    <td className="row-data">{req.numberOfRequests}</td>
                                                    <td className="row-data">{req.lastDataRequest}</td>
                                                    <td className="row-data">
                                                        <button
                                                            className="view-button"
                                                            onClick={() => {
                                                                setDate(req.dates);
                                                                setViewPopup(true);
                                                            }}
                                                        >
                              View
                                                        </button>
                                                    </td>
                                                    <td className="empty-row"></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    ))}
            </div>
        </React.Fragment>
    );
};

export default DataDisclosure;
