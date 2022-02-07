import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SharePopup from "../../share_popup/SharePopup.component";
import "./authorisation_table.css";

const AuthorisationTable = ({
    rows,
    filterValue,
    setStop,
    statusChange,
    setSharingPopup,
    sharingPopup,
    customerId,
    setCustomerId,
    setBankName,
}) => {
    const [adrName, setAdrName] = useState("");
    const [details, setDetails] = useState({ transactions: {}, debits: {} });

    return (
        <div>
            <SharePopup
                adrName={adrName}
                sharingPopup={sharingPopup}
                transactionDetails={details.transactions ? details.transactions : null}
                debitDetails={details.debits ? details.debits : null}
                setSharingPopup={setSharingPopup}
                setStop={setStop}
                statusChange={statusChange}
            />

            <table>
                <thead>
                    <tr>
                        <th>Organisation</th>
                        <th>Consent granted</th>
                        <th>Last date data requested</th>
                        <th>Consent expiry</th>
                        <th>Status</th>
                        <th>Details</th>
                        <th>Information</th>
                    </tr>
                </thead>
                <tbody>
                    {rows
                        .filter((d) => filterValue === "ALL" || d.status === filterValue)
                        .map((data) => (
                            <tr>
                                <td>{data.tppName}</td>
                                <td>{data.consentGrantedDate}</td>
                                <td>{data.tppDetail.keyDates.lastDataRequest}</td>
                                <td>{data.tppDetail.keyDates.consentExpiry}</td>
                                <td className="tpp-status-body">
                                    {data.status === "Active" ? (
                                        <button className="tpp-status-active">ACTIVE</button>
                                    ) : (
                                        <button className="tpp-status-inactive">INACTIVE</button>
                                    )}
                                </td>
                                <td>
                                    <button className="btton-show-details">
                                        <NavLink
                                            className="show-details-link"
                                            exact
                                            to={{
                                                pathname: "/detail",
                                                details: data.tppDetail,
                                                tppName: data.tppName,
                                                icon: data.icon,
                                                consumerId: data.consumerId,
                                                status: data.status,
                                                setSharingPopup,
                                                sharingPopup,
                                                statusChange,
                                                setCustomerId,
                                            }}
                                        >
                      Show Details
                                        </NavLink>
                                    </button>
                                </td>
                                <td>
                                    {data.status === "Active" ? (
                                        <button
                                            id={"btn_" + data.consumerId}
                                            className="btton-stop-sharing"
                                            onClick={() => {
                                                setAdrName(data.tppName);
                                                setDetails(data.tppDetail);
                                                setCustomerId(data.consumerId);
                                                setBankName(data.tppName);
                                                setSharingPopup(true);
                                            }}
                                        >
                      STOP SHARING
                                        </button>
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default AuthorisationTable;
