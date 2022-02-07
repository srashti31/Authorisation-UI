import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "../../../css/view_dates.css";

const ViewDatesPopup = ({ viewpopup, setViewPopup, date }) => {

    return (
        <Dialog
            open={viewpopup}
            maxWidth={"md"}
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
            className="error-popup"
        >
            <DialogTitle id="error-title">Account List Disclosures
                <button className="close-btn"
                    onClick={() => {
                        setViewPopup(false);
                    }}>
                    <CloseIcon />
                </button>
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    id="error-dialog-description"
                    tabIndex={-1}
                    component={"div"}
                >
                    <table className="viewdate">
                        <thead className="viewdate-head">
                            <tr>
                                <td>Date Requested</td>
                                <td>TIme Requested</td>
                            </tr>
                        </thead>
                        <tbody>
                            {date.map((d, i) => (
                                <tr key={i}>
                                    <td>{d.dataRequested}</td>
                                    <td>{d.timeRequested}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
export default ViewDatesPopup;