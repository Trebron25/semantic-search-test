import { ThemeContext } from '@emotion/react';
import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import ResultCard from '../components/ResultCard';
import SearchBox from '../components/SearchBox';
import '../styles/App.css';

const results = [
    {
        title: "Valami1",
        distance: "233"
    },
    {
        title: "Valami2",
        distance: "233"
    },
    {
        title: "Valami3",
        distance: "233"
    },
]

const ResultsContainer = () => {

    const theme = useContext(ThemeContext)

  return (
    <div className="Results-Container">
        <Grid item xs={8}>
          {results.map(item => {
              console.log(theme)
              return <ResultCard text={item.title}/>
          })}
        </Grid>
    </div>
  );
}

export default ResultsContainer;
