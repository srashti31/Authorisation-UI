import React from "react";
import { Paper } from "@material-ui/core";
import { FiDownload } from "react-icons/fi";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import "../../../css/stoppedsharing.css";
import { Constants } from "../../../constents/Constants";
const StoppedSharing = ({ bankName }) => {
    return (
        <Paper className="stopped-sharing-content" elevation={3}>
            <div className="stopped-sharing">
                <p className="sharing-done-text">
                    <CheckCircleRoundedIcon className="sharing-done-icon" />
                    {`${Constants.afterStopSharingMessagePart1} ${bankName} ${Constants.afterStopSharingMessagePart2}`}
                </p>
                <p className="download">
                    {" "}
                    <FiDownload className="download-icon" /> {Constants.dowunloadedFile}
                </p>
            </div>
        </Paper>
    );
};

export default StoppedSharing;
