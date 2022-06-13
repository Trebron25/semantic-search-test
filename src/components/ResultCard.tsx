import { Search } from '@mui/icons-material';
import { Button, Card, InputAdornment, Paper, TextField } from '@mui/material';
import React from 'react';
import '../styles/App.css';

type ResultCardProps = {
  text: string;
} 

const ResultCard = (props: ResultCardProps) => {
  const {text} = props
  return (
    <div className="Result-Card" style={{minWidth: '60vw', marginTop: 20}}>
      <Paper elevation={0} sx={{maxWidth: '60vw', minHeight: 40}}>
        {text}
      </Paper>
    </div>
  );
}

export default ResultCard;
