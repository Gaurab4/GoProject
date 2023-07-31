import { Checkbox, FormControlLabel, List } from '@mui/material'
import React from 'react'

export const BrandList = ({changeChecked , Brand}) => {
    const { checked, label, id } = Brand;
  return (
    <List sx={{ '@media (max-width: 600px)': {
      flexDirection: 'column',
      alignItems: 'center',
      
    
    }, display: 'flex', flexDirection: 'column', ml: 3 , flex:'1' }}>
    <FormControlLabel control={<Checkbox  checked={checked}
        onChange={() => changeChecked(id)} /> }  label={label} />
    </List>
  )
}
