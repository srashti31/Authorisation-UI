import React from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Information from "../../common_components/information/Information.component";
import { Constants } from "../../../constents/Constants";
const KeyDates = ({ keyDates, tppName }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                className="pannel-title"
                expandIcon={<ExpandMoreIcon />}
            >
                {Constants.keyDates}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <Information
                        title={Constants.whenConsentGiven}
                        description={keyDates.consentGiven}
                    />
                    <Information
                        title={Constants.whenConsentExpire}
                        description={keyDates.consentExpiry}
                    />
                    <Information
                        title={Constants.sharingPeriod}
                        description={`${keyDates.consentGiven} - ${keyDates.consentExpiry}`}
                    />
                    <Information
                        title={Constants.howOftenShareData}
                        description={
                            `We do this every time you log into ${tppName}'s on Budget Tracker.`

                        }
                    />
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default KeyDates;
