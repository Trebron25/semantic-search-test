import { Grid } from '@mui/material';
import React from 'react';
import ResultCard from '../components/ResultCard';
import ResultsContainer from '../components/ResultsContainer';
import SearchBox from '../components/SearchBox';
import '../styles/App.css';

const ThemeContext = React.createContext({theme: 'light'});

const SearchPage = () => {
  return (
    <div className="Search-Page">
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <SearchBox/>
        </Grid>
        <Grid item>
          <ResultsContainer/>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchPage;
