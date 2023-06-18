import React from "react";
import { Box, Button, Select, MenuItem, Menu, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    wrapper: {
        backgroundColor: "#fff",
        display: "flex",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        "& > *" : {
            flex: 1,
            height: "45px",
            margin: "8px",
        },
    },
})

export default props => {
    const classes = useStyles();
    return(
        <Box p={2} mt={-5} className={classes.wrapper}>
            <Select variant="filled" disableUnderline defaultValue="Full time">
                <MenuItem value="Full time">Full Time</MenuItem>
                <MenuItem value="Part time">Part Time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            <Select variant="filled" disableUnderline defaultValue="Remote">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office</MenuItem>
            </Select>
            <Button variant="contained" color="primary" disableElevation>
            Search
          </Button>
        </Box>
    )
}