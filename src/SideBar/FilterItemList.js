import { Checkbox, FormControlLabel, List } from '@mui/material'
import React from 'react'

export const FilterItemList = ({change , item}) => {
    const { checked, label, id } = item;
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', ml: 3 , flex:'1' }}>
    <FormControlLabel control={<Checkbox  checked={checked}
        onChange={() => change(id)} /> }  label={label} />
    </List>
  )
}
