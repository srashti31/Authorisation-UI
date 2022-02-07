import React from "react";
import "./filtertable.css";

const FilterTable = ({ filterCallback, filterValue }) => {
    const onChange = (value) => {
        filterCallback(value);
    };
    return (
        <div className="filter-content">
            <div className="filter-text">Filter:</div>
            <div className="filter-box">
                <select
                    className="filter-option"
                    onChange={(e) => onChange(e.target.value)}
                    value={filterValue}
                >
                    <option value="ALL">All</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
        </div>
    );
};

export default FilterTable;
