import React, { useState } from "react";
import Debits from "../debits/Debits.component";
import Transactions from "../transactions/Transactions.component";
import KeyDates from "../key_dates/KeyDates.component";
import Accounts from "../accounts/Accounts.component";
import AdditionalInformation from "../additional_information/AdditionalInformation.component";
import "../../../css/authorisation.css";
import StoppedSharing from "../../page_components/stopped_sharing/StoppedSharing.component";
import SharePopup from "../../page_components/share_popup/SharePopup.component";
import { Paper } from "@material-ui/core";
import { Constants } from "../../../constents/Constants";

const Details = (props) => {
    const [stop, setStop] = useState(false);
    const [sharingPopup, setSharingPopup] = useState(false);
    const [detailStatus, setDetailStatus] = useState(props.location.status);

    return (
        <div>
            <SharePopup
                consumerId={props.location.consumerId}
                adrName={props.location.tppName}
                sharingPopup={sharingPopup}
                transactionDetails={
                    props.location.details.transactions
                        ? props.location.details.transactions
                        : null
                }
                debitDetails={
                    props.location.details.debits ? props.location.details.debits : null
                }
                setSharingPopup={setSharingPopup}
                statusChange={props.location.statusChange}
                setStop={setStop}
                setDetailStatus={setDetailStatus}
            />
            <div className="tpp-detail-page">
                <React.Fragment>
                    <div className="detail-container">
                        <div className="">
                            <div>
                                <span className="detail-icon-container">
                                    <img
                                        src={props.location.icon}
                                        alt="icon"
                                        className="tpp-detail-icon"
                                    />
                                </span>
                                <span className="tpp-detail-name">
                                    {props.location.tppName}
                                </span>
                            </div>
                            <div className="tpp-product-date">
                                <span>{Constants.product} </span>
                                <span>{props.location.details.productName}</span>
                            </div>
                            <div className="consent-tag-div">
                                <a href="/" className="constent-tag">
                                    {Constants.confirmationConsent}
                                </a>
                            </div>
                            <div className="download-popup">
                                {stop ? (
                                    <StoppedSharing
                                        setStop={setStop}
                                        bankName={props.location.tppName}
                                    />
                                ) : null}
                            </div>
                        </div>
                        {detailStatus === "Active" ? (
                            <div className="tpp-detail-status-body">
                                <span className="stop-sharing-span">
                                    <button
                                        className="btton-stop-sharing"
                                        onClick={() => {
                                            props.location.setCustomerId(props.location.consumerId);
                                            setSharingPopup(true);

                                        }}
                                    >
                                        {Constants.stopShareButtonText}
                                    </button>
                                </span>
                                <span className="tpp-detail-status-active">ACTIVE</span>
                            </div>
                        ) : (
                            <div className="status">
                                <span className="tpp-detail-status-inactive">INACTIVE</span>
                            </div>
                        )}
                    </div>
                </React.Fragment>
                <p>{Constants.sharedDataText}</p>
                {props.location.details.transactions ||
          props.location.details.debits ? (
                        <Paper variant="outlined" className="paper-detail">
                            {props.location.details.transactions ? (
                                <Transactions
                                    tppName={props.location.tppName}
                                    details={props.location.details.transactions}
                                    keyDates={props.location.details.keyDates}
                                />
                            ) : null}

                            {props.location.details.debits ? (
                                <Debits debits={props.location.details.debits} />
                            ) : null}
                        </Paper>
                    ) : null}
                <Paper variant="outlined">
                    <div>
                        <KeyDates
                            tppName={props.location.tppName}
                            keyDates={props.location.details.keyDates} />
                    </div>
                    <div>
                        <Accounts accounts={props.location.details.accounts} />
                    </div>
                    <div>
                        <AdditionalInformation
                            tppName={props.location.tppName} />
                    </div>
                </Paper>
            </div>
        </div>
    );
};
export default Details;
