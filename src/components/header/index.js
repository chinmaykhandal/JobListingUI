import React from "react";
import { Box, Typography, Grid, Button } from "@material-ui/core";
import theme from "../../theme/theme";

export default (props) => (
  <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5">Open Job Listing</Typography>
          <Button variant="contained" color="primary" disableElevation>
            Post a Job
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
