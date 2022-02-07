import React, { createRef } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from "@material-ui/core";
import Information from "../../common_components/information/Information.component";
import "../../../css/sharepopup.css";
import { Constants } from "../../../constents/Constants";

const SharePopup = ({
    adrName,
    sharingPopup,
    transactionDetails,
    debitDetails,
    setSharingPopup,
    statusChange,
    consumerId,
    setStop,
    setDetailStatus,
}) => {
    const wrapper = createRef();

    return (
        <Dialog
            scroll={"body"}
            open={sharingPopup}
            maxWidth={"md"}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
            fullWidth={true}
            className="share-popup"
        >
            <DialogTitle id="scroll-dialog-title">
                {`Stop sharing with: ${adrName}`}{" "}
                <div>{Constants.thingsBeforSharing}</div>
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="scroll-dialog-description"
                    ref={wrapper}
                    tabIndex={-1}
                    component={"div"}
                >
                    <Information
                        popup={true}
                        title={Constants.impactyourService}
                        description={`Your service may be impacted when you stop sharing. You should check with ${adrName} before you do this.`}
                    />
                    <Information
                        popup={true}
                        title={Constants.whatHappenToYourSharedData}
                        points={[
                            `When you stop sharing, ${adrName} will either de -identify or delete your data.`,
                            Constants.sharedDataDiscription2,
                        ]}
                    />
                    {transactionDetails ? (
                        <Information
                            popup={true}
                            title={Constants.transactionDetails}
                            dataList={Constants.dataList}
                        />
                    ) : null}
                    {debitDetails ? (
                        <Information
                            popup={true}
                            title={Constants.directDebit}
                            dataList={Constants.dataList}
                        />
                    ) : null}
                </DialogContentText>
            </DialogContent>

            <div className="btn-wrapper">
                <p>{Constants.stopSharing}</p>
                <div>
                    <button
                        className="button btn-cancel"
                        onClick={() => setSharingPopup(false)}
                    >
            Cancel
                    </button>
                    <button
                        className="button btn-confirm"
                        onClick={() => {
                            statusChange();
                            statusChange(consumerId);
                            setStop(true);
                            if (consumerId !== undefined) setDetailStatus("Inactive");
                            setSharingPopup(false);
                        }}
                    >
            Confirm
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default SharePopup;
