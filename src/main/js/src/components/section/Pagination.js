import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
            justifyContent:"center",
            display:'flex'
        }
    }
}));

export const PaginationButtons = ({ handlePageChange }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination
                count={2}
                hidePrevButton
                hideNextButton
                size="large"
                onChange={(e) => handlePageChange(e)}
            />
        </div>
    );
};
