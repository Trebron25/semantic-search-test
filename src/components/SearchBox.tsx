import { Search } from '@mui/icons-material';
import { Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import '../styles/App.css';

const SearchBox = () => {
  return (
    <div className="Search-Box" style={{textAlign:'center', marginTop: 50}}>
        <TextField
            label='Szemantikus Kereső'
            variant='outlined' 
            InputProps={{
                startAdornment: <Search/>,
              }}
            placeholder='Keresés'/>
        <Button sx={{minHeight: '54.9px', borderRadius:35}} variant='contained' color='primary' >Keresés</Button>
    </div>
  );
}

export default SearchBox;
