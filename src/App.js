import React, {useState, useEffect} from "react";
import {Grid, ThemeProvider } from "@material-ui/core";
import theme from "./theme/theme";
import Header from "./components/header";
import SearchBar from "./components/header/SearchBar";
import JobCard from "./components/header/Job/JobCard";
import NewJobModal from "./components/header/Job/NewJobModal";
import jobData from './dummyData'
import axios from "axios";


export default () => {
  const [jobs, setJobs] = useState([]);


  useEffect(() => {
    fetchJobs();
  }, [])
  const fetchJobs = async () => {
    const response = await axios.get(`http://localhost:8080/allPosts`);
    setJobs(response.data);
    console.log(jobs);

}
  return <ThemeProvider theme={theme}>
  <Header />
  <NewJobModal />
  <Grid container justify="center">
    <Grid item xs={10}>
      <SearchBar />
      
      {jobData.map(job => <JobCard key={job.id} {...job} />)}

      
    </Grid>
    
  </Grid>
  </ThemeProvider>;
};
