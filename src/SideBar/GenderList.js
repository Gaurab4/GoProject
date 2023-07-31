import { FormControlLabel, List, Radio, RadioGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

const GenderList = ({option,value,selectToggle}) => {
  return (
    <List  sx={{ display: 'flex', flexDirection: 'column', ml: 2,flexGrow: 1,zIndex:1}} >
            <ToggleButtonGroup
      value={value}
      exclusive
      onChange={selectToggle}
      orientation="vertical"
      sx={{mr:2,mb:1, border:'0'}}
     
    >
      {option.map(({ label, id, value }) => (
        <ToggleButton key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
        </List>
  )
}

export default GenderList