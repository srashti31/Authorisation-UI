import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../../css/information.css";

const Information = ({
    title,
    description,
    collection,
    points,
    popup,
    dataList,
    link,
}) => (
    <React.Fragment>
        <div className="info-title">{title}</div>
        {collection ? (
            <ul>
                {collection.map((col, i) => (
                    <li key={i}>{col}</li>
                ))}
            </ul>
        ) : points ? (
            <div>
                {points.map((point, i) => (
                    <p key={i}>{point}</p>
                ))}
            </div>
        ) : dataList ? (
            <p className="data-list">
                {dataList} <ExpandMoreIcon className="down-icon" />
            </p>
        ) : (
            <div className="description">
                {description}{" "}
                {link ? (
                    <a className="web-link" href={link}>
            [website]
                    </a>
                ) : null}
            </div>
        )}
        <hr className={popup ? "hr-popup" : "hr-detail"} />
    </React.Fragment>
);

export default Information;
