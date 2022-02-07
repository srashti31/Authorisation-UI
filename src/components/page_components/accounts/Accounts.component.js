import React from "react";
import { Constants } from "../../../constents/Constants";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Information from "../../common_components/information/Information.component";

const Accounts = ({ accounts }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                className="pannel-title"
                expandIcon={<ExpandMoreIcon />}
            >
        Accounts
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <Information
                        title={Constants.everydayAccounts}
                        description={accounts.everydayAccount}
                    />
                    <Information
                        title={Constants.savingsAccount}
                        description={accounts.savingsAccount}
                    />
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default Accounts;
