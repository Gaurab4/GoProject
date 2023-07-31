import { Box, Button, Card, CardContent, CardMedia, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useCart } from "react-use-cart";

import { Link } from 'react-router-dom';


const ListMap = ({list} , handleImage) => {
    const  { addItem } = useCart();
    return (
        
        <Box   sx={{  flex: 1 , display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gridGap: '20px' , pl:5 , pt:2 }}>
        
        
        { list.map((product) => (
        
            <Card  onChange={handleImage}  hoverable sx ={{ '@media (max-width: 600px)': {
          flexDirection: 'row',
          alignItems: 'center',
          ml:15,
          height: 'auto',
        }, maxWidth:220,textDecoration:'none',height:450 ,borderRadius:0 ,boxShadow:0}}>
            <Link to={'/dash'} state={product}  >
            <Box
        boxShadow={2} // Add the box shadow here
        borderRadius={2} // Optional: Add border radius for a rounded look
        bgcolor="white" // Optional: Set background color
      >
        <CardMedia
        
        sx={{height:280, position: 'relative'}}
    
        image={product.imgURL}
        
        
        >
        <Paper direction='row' elevation={1}  sx={{width: 65,
          backgroundColor: 'white',
          border: '0.1',
          p: 1,
          display: 'flex',
          position: 'absolute', 
          bottom: 0, 
          left: 0,
          ml: 1,
          color:'blue',
          mb: 2, }}>
    
    <Typography sx={{fontSize:11 ,fontWeight:'bold' , mr:1}}>{product.rating}⭐️ </Typography>
    
    <Divider orientation="vertical" sx={{height: 'auto'}}/>
    <Typography sx={{fontSize:11,fontWeight:'bold' , ml:1 }}> 455</Typography>
    </Paper>
     
    </CardMedia>
    </Box>
    </Link> 
    
        <Button onClick={()=>addItem(product)} sx={{borderRadius:'2%',mt:1, color:'black',border:0.1,height:30,width:'220px', mr:2}}>        
        <Typography sx={{ml:2,fontWeight:'bold' }}>WISHLIST</Typography>
    </Button>
     
    
    <Link to={'/dash'} state={product} underline="none" sx={{ textDecoration: 'none' }}   >   
    <Box
        boxShadow={2} 
        borderRadius={2} 
        bgcolor="white" 
      >
        <CardContent underline="none"  sx={{ textDecoration: 'none' }}>
              
              <Typography sx={{fontWeight:'bold', fontSize:'15px'}}>
                  {product.name}
              </Typography>
              <Typography sx={{fontSize:'12px'}}>{product.sub}</Typography>
              <Paper elevation={0} sx={{display:'flex'}}>
              <Typography underline="none"  sx={{fontSize:'12px', mr:1,}}> Rs.{product.price} </Typography>
              <Typography sx={{textDecorationLine:'line-through',direction:'row',fontSize:'12px' , display:'flex'}}>{product.OriginalP}</Typography>
              <Typography sx={{textDecoration: 'none' ,fontSize:'12px', ml:1,}}>  {product.Discount}</Typography>
              </Paper>
              </CardContent>
      </Box>
        
    </Link>
        </Card>
        
        ))}
    
            
        </Box>
        
    )
}
    
    

  


export default ListMap