import React from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Information from "../../common_components/information/Information.component";
import { Constants } from "../../../constents/Constants";
const Transactions = ({ tppName, details, keyDates }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                className="pannel-title"
                expandIcon={<ExpandMoreIcon />}
            >
                {Constants.transactionDetails}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <Information
                        title={Constants.transactionfirstHeaderText}
                        collection={details.sharing}
                    />
                    <Information
                        title={Constants.transactionSecondHearderText}
                        points={[`You have shared transaction data that dates back to ${details.historicalDate}.`,
                            "The recipient may or may not have collected data to this extent."
                        ]}
                    />
                    <Information
                        title={Constants.transactionThirdHearderText}
                        points={[
                            `We ﬁrst shared your transaction details with ${tppName} on ${keyDates.consentGiven}`,
                            `We’ll continue to share this until ${keyDates.consentExpiry}`,
                        ]}
                    />
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default Transactions;
