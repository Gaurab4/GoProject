import { List, MenuItem, Select, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

const SortList = ({option,value,selectToggle}) => {    
  return (
    
            
    <List  sx={{  flexDirection: 'column', ml: 0,flexGrow: 1,zIndex:1}} >
    <ToggleButtonGroup
value={value}

exclusive
onChange={selectToggle}
orientation="vertical"
sx={{width:'100%',height:'100%' }}
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

export default SortList