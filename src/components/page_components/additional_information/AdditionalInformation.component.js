import React from "react";
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Information from "../../common_components/information/Information.component";

const AdditionalInformation = ({ tppName }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                className="pannel-title"
                expandIcon={<ExpandMoreIcon />}
            >
        Key additional information
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <Information
                        title="Accreditation"
                        description={`${tppName} is an accredited data recipient.You can check their accreditation at `}
                        link={"/"}
                    />
                    <img
                        src="../../images/consumer-data-right.png"
                        alt="icon"
                        className="consumer-icon"
                    />
                    <Information
                        title="Other important information"
                        description="There may be additional important information that is not shown here.Please check this sharing arrangement on the wesite/app."
                    />
                    <a href="/" className="see-all-providers">
            See list of providers
                    </a>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default AdditionalInformation;
