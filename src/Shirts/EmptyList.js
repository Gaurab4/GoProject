import { Paper } from '@mui/material'
import React from 'react'

import noProduct from '../images/package-lock.png'

const EmptyList = () => {
  return (
    <div>
      <Paper>
        <img src = {noProduct}  height='100%'  width='100%'/>
      </Paper>

    
    </div>
  )
}

export default EmptyList