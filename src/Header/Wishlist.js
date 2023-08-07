import { Button, Card, CardContent, CardMedia, Paper, Typography } from '@mui/material'
import React from 'react'

import { useCart } from 'react-use-cart'

const WishList = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart
  }  = useCart();
  if(isEmpty ) return <h1> Your Wishlist is Empty</h1>
  return (
    <Card elevation='0'   sx={{ p:1  ,direction:'row' }}>
        {items.map((item,index) => (
          <Card elevation='0' sx={{ p:2 }} >
          <CardMedia 
            sx={{height:'100px',display:'flex' ,borderRadius:'5%',width:'60px'}}
            image={item.imgURL}
          
          />
          <CardContent sx={{direction:'row'}}>
            <Typography>Name: {item.name}</Typography>
            <Typography>Price: {item.price}</Typography>
          
          </CardContent>
          <Paper  elevation={0} sx={{width:'40%'}}>
              <Button sx={{backgroundColor:'blue','&:hover': {
            backgroundColor:  'lightblue',
          } , color:'white' , height:'30px' , width:'50px'}} onClick={() => removeItem(item.id) }>Remove</Button>
            </Paper>
          </Card>
        
            
        ))}
      
  
</Card>


  )
}

export default WishList