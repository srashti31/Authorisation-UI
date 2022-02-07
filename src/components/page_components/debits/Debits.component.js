import React from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Information from "../../common_components/information/Information.component";
import { Constants } from "../../../constents/Constants";

const Debits = ({ tppName = "MoneyBee", debits }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                className="pannel-title"
                expandIcon={<ExpandMoreIcon />}
            >
                {Constants.directDebit}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <Information title="What we’re collecting" collection={debits} />
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default Debits;
