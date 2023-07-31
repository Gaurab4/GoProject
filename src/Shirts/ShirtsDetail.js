import { Box, Button, Divider, Grid, InputAdornment, List, ListItem, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import ImageList from './ImageList';
import { images } from '../utils/constants';
import { useCart } from "react-use-cart";
import Header from '../Header/Header';

const ShirtsDetail = () => {
    const  { addItem } = useCart();
    const Prod = useLocation();
    const Details = Prod.state;
    const [isClicked, setIsClicked] = useState(false);
    let imm=[];
    const applyImages = () => {    
        imm = images.filter((item) => (item.id) === (Details.id) 
        );    
    }

    applyImages();

    const handleButtonClick = (event ,value) => {
        
        setIsClicked((prevState) => ({ ...prevState, [value]: !prevState[value] }));
      };
    
    
  return (
    <>
<Header/>
<Grid container sx={{pt: 5}} >
     <Grid item xs={12}  md={7 }>
    
            <ImageList images = {imm} />
    
     </Grid>
     <Grid item xs={12} md={5} sx={{ padding: { xs: '16px' } }}>
     
                <Typography sx={{fontWeight:700 , fontSize:22} }> {Details.name}</Typography>
                <Typography sx={{fontWeight:200 , fontSize:20  , mb:1} }>{Details.sub}</Typography>
                <Paper direction='row'   sx={{width:145 ,border:'0.1',p:1 , display:'flex' ,mb:2}}>

                <Typography sx={{fontSize:14 , mr:1}}>{Details.rating} ⭐️ </Typography>

                <Divider orientation="vertical" sx={{height: 'auto'}}/>
                <Typography sx={{fontSize:14 , ml:1 }}> 1.7K Ratings</Typography>
                </Paper>
                <Divider  sx={{height: 'auto'}}/>
                <Paper elevation={0} sx={{display:'flex' , mt:1 }}>
                    
                <Typography sx={{fontSize:22,fontWeight:'bold', mr:2}}> ₹{Details.price}</Typography>
                <Typography sx={{fontSize:20,fontWeight:200,textDecoration:'line-through', mr:2}}> {Details.OriginalP}</Typography>
                <Typography sx={{fontSize:22,fontWeight:'bold',color:'orange', mr:2}}>({Details.Discount})</Typography>
                </Paper>
                <Typography sx={{fontSize:14,fontWeight:'bold',color:'green', mr:2,mb:3}}>inclusive of all taxes</Typography>

                {/* Size Selection  */}
            <Typography sx={{fontSize:15,fontWeight:'bold', mr:2}}>SELECT SIZE </Typography>
                <Paper elevation={0} sx={{display:'flex', mt:3,mb:3}}>
                    
                        <Button value='S' onClick={(e) => handleButtonClick(e, 'S')} sx={{borderRadius:'50%' ,border:1,height:60, mr:2 ,backgroundColor: isClicked['S'] ? 'lightblue' : 'white',
                             transition: 'background-color 0.2s ease','&:hover': {
            backgroundColor: isClicked['S'] ? 'lightblue' : 'white',
          },}} >{"S"}</Button>
          <Button value='M' onClick={(e) => handleButtonClick(e, 'M')} sx={{borderRadius:'50%' ,border:1,height:60, mr:2 ,backgroundColor: isClicked['M'] ? 'lightblue' : 'white',
                             transition: 'background-color 0.2s ease','&:hover': {
            backgroundColor: isClicked['M'] ? 'lightblue' : 'white',
          },}} >{"M"}</Button>
          <Button value='L' onClick={(e) => handleButtonClick(e, 'L')} sx={{borderRadius:'50%' ,border:1,height:60, mr:2 ,backgroundColor: isClicked['L'] ? 'lightblue' : 'white',
                             transition: 'background-color 0.2s ease','&:hover': {
            backgroundColor: isClicked['L'] ? 'lightblue' : 'white',
          },}} >{"L"}</Button>
                        
                    
                    
                </Paper>

                {/* Add to Bag Button  */}
                <Paper elevation={0} sx={{display:'flex', mt:3,mb:3}}>
                    
                    <Button onClick={()=>addItem(Details)} sx={{borderRadius:'2%' ,'&:hover': {
            backgroundColor:  'lightblue',
          },backgroundColor:'red',height:60,width:'300px', mr:2}}> 
                    <ShoppingBagIcon sx={{color: 'white'}}/>
                    <Typography sx={{ml:2,fontWeight:'bold' , color:'white'}}>ADD TO BAG</Typography>
                    </Button>
                    <Button onClick={()=>addItem(Details)} sx={{borderRadius:'2%', color:'black',border:1,height:60,width:'200px', mr:2}}>
                    <FavoriteBorderOutlinedIcon/>
                    <Typography sx={{ml:2,fontWeight:'bold' }}>WISHLIST</Typography>
                     </Button>    
                </Paper>
                <Divider  sx={{height: 'auto'}}/>
                <Paper elevation={0} sx ={{display:'flex',mt:3 }}>
                    <Typography sx={{mr:2, fontWeight:'bold' ,  }}> DELIVERY OPTIONS</Typography>
                    <AirportShuttleOutlinedIcon/>
                </Paper>
                <TextField sx={{width:'40%' , mt:2 , height:'60px'}}
                 placeholder='Enter pincode'
                /> 
                <Typography sx={{fontSize:10, mb:2}}> please enter PIN code to check delivery time & Pay on Delivery Availability</Typography>
                <Typography sx={{fontSize:15,fontWeight:'200'}}> 100% Original Products</Typography>
                <Typography sx={{fontSize:15,fontWeight:'200'}}> Pay on delivery might be available</Typography>
                <Typography sx={{fontSize:15,fontWeight:'200'}}> Easy 14 days returns and exchanges</Typography>
                <Typography sx={{fontSize:15,fontWeight:'200'}}> Try & Buy might be available</Typography>
                
                {/* Offers  */}
                <Paper elevation={0} sx={{mt:4 , mb:3}}>
                    <Typography sx={{fontWeight:'bold' , fontSize:18  , mb:1}}> BEST OFFERS 📍</Typography>
                    <Typography sx={{fontSize:15 , fontWeight:'bold'}}> Best Price: <span sx={{color:'orange'}}>Rs. 302</span> </Typography>
                    <List >
                        <ListItem>
                        <Typography sx={{fontSize:15 }}>Coupon Discount: Rs. 84 off (check cart for final savings)</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography  sx={{fontSize:15 }}>Coupon code: MYNTRA200</Typography>
                        </ListItem>
                        <ListItem>
                        <Typography sx={{fontSize:15 }}>Applicable on: Orders above Rs. 999 (only on first purchase)</Typography>
                        </ListItem>                    
                    </List>
                    <Typography sx={{color:'red' , fontSize:12 , fontWeight:'bold'}}> View Eligible Products</Typography>
                </Paper>

                <Divider  sx={{height: 'auto' , color:'black' }}/>

                {/* Product Details */}
                <Paper>
                    <Typography sx={{fontSize:16 , fontWeight:'bold' }}> PRODUCT DETAILS 🔖</Typography>
                    <Typography sx={{fontSize:15 , fontWeight:400} }>
                    Black solid casual shirt, has a spread collar, three-quarter sleeves, curved hem,
                    </Typography>

                    <Typography>Size & Fit</Typography>
                    <Typography>Size : {Details.Fit}</Typography>
                <Typography>Fit : {Details.Length}</Typography>

                </Paper>
                
        
     </Grid>
        
    </Grid>
    </>
  
    

        
    
  )
}

export default ShirtsDetail