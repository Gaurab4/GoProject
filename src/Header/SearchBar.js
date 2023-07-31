import React, { useState } from 'react';
import { Box, Card, InputAdornment, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ListMap from '../Shirts/ListMap';

const SearchBar = ({ selectValue }) => {
  

  const handleChange = (value) => {
    
    selectValue(value);
  };

  return (
    <>
      <Box   width="fit-content" >
        <TextField
        sx={{width:'150%' ,'@media (max-width: 600px )': {
          flexDirection: 'column',
          alignItems: 'center',
          ml:2,
          height: 'auto',
        },}}
          variant="outlined"
          size="small"
          placeholder="Type here..."
          
          onChange={(e) => handleChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default SearchBar;
