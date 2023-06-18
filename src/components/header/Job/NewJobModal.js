import React from "react";
import {
  Box,
  Grid,
  FilledInput,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  makeStyles,
  Button,
  IconButton
} from "@material-ui/core";
import { Close as CloseIcon} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.5),
        fontSize: "14.5",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        "&:hover": {
            backgroundColor: theme.palette.secondary.main,
            color: "#fff"
        }
    }
}));

export default (props) => {

    const skills = ["Javascript", "React", "Node", "Vue", "Firebase", "MongoDB", "SQL"];
    const classes = useStyles();
  return (
    <Dialog fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            Post Job
            <IconButton>
                <CloseIcon />
            </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder="Job Title *" disableUnderline fullWidth />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              variant="filled"
              disableUnderline
              defaultValue="Full time"
            >
              <MenuItem value="Full time">Full Time</MenuItem>
              <MenuItem value="Part time">Part Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Company Name *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Company URL *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Select
              fullWidth
              variant="filled"
              disableUnderline
              defaultValue="Remote"
            >
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="In-office">In-office</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={6}>
            <FilledInput
              placeholder="Job Link *"
              disableUnderline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FilledInput
              placeholder="Job description *"
              disableUnderline
              fullWidth
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
            <Typography>Skills</Typography>
            <Box display="flex">
                {skills.map((skill) => (
                    <Box key={skill} className={classes.skillChip}>{skill}</Box>
                ))}
            </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box color="red" width="100%" display="flex" justifyContent="space-between">
            <Typography>*Required fields</Typography>
            <Button variant="contained" disableElevation color="primary">Post Job</Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};
