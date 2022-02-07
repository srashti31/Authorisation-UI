import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import "./searchbox.css";

const useStyles = makeStyles({
    root: {
        padding: 1,
        minWidth: 20,
        color: "#939292",
        margintop: 10,
        width: 25,
        height: 25,
    },
});

const SearchBox = () => {

    const classes = useStyles();
    const [value, setValue] = useState("83468484");
    return (
        <div className="search-contain">
            <div className="search-box">
                <input
                    id="search"
                    className="search-input"
                    placeholder="Enter a customer’s ID…"
                    value={value}
                />
                <Button
                    classes={{
                        root: classes.root,
                        label: classes.label,
                    }}
                >
                    <SearchIcon />
                </Button>
            </div>
            <button className="clear-search" onClick={() => setValue("")}>
      RESET SEARCH

            </button>
        </div >
    );
};

export default SearchBox;