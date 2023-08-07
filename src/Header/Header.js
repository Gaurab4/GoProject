import React from 'react';
import Badge from '@mui/material/Badge';
import Popup from 'reactjs-popup';
import TextField from '@mui/material/TextField';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Box, Button, Card, Paper, Stack, Typography, colors } from '@mui/material';
import logo from '../images/Myntra-icon-logo.svg';
import SearchBar from './SearchBar';
import { CartProvider } from 'react-use-cart';
import AddtoBag from './AddtoBag';
import WishList from './Wishlist';

const Header = ({ selectValue }) => {
  return (
    

    <Stack
      direction="row"
      alignItems="center"
      p={2}
      css={{ zIndex: 1}}
      sx={{
        '@media (max-width: 900px)': {
          flexDirection: 'row',  
          ml:0  ,
          mr:0,
          mt:0,
          p:0,
          alignContent:'center',
          alignItems: 'center',
          height: '125px',
        },
        '@media (max-width: 600px)': {
          flexDirection: 'row',
          alignItems: 'center',
        
          height: 'auto',
        },
        height:'50px',
        background: 'white',
        top: 0,
        justifyContent: 'space-between',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        mb:2
      }}
    >

    {/* Nav Options  */}

      <Paper elevation="0" sx={{  
          ml:5,
           }} >
          <img src={logo} height="70px" width="60px" />
        </Paper>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          '@media (max-width: 800px)': {
          display:'none',
          flexDirection: 'row',
          fontSize:'8px',
          alignItems: 'center',
          height: 'auto',
        },
          background: 'white',
          top: 0,
          justifyContent: 'space-between',
          
        }}
      >
        
        <Typography sx={{ m: 3,fontSize:'14px', paddingLeft: '10px', fontWeight: 'bold' }}>MEN</Typography>

        <Typography sx={{ m: 3,fontSize:'14px', fontWeight: 'bold' }}>WOMEN</Typography>

        <Typography sx={{ m: 3, fontSize:'14px',fontWeight: 'bold' }}>KIDS</Typography>

        <Typography sx={{ m: 3,fontSize:'14px', fontWeight: 'bold' }}>HOME & LIVING</Typography>
        <Typography sx={{ m: 3,fontSize:'14px', fontWeight: 'bold' }}>BEAUTY</Typography>

        <Badge badgeContent={'NEW'} color="secondary">
          <Typography sx={{ m: 1,fontSize:'14px', fontWeight: 'bold' }}>STUDIO</Typography>
        </Badge>
      </Stack>

      {/* Search Bar  */}
      <SearchBar selectValue={selectValue} />

      {/* Profiles Tabs and options  */}
      <Stack direction="row" sx={{
        '@media (max-width: 900px)': {
          flexDirection: 'column',  
          ml:5  ,
          mt:0,
          p:3,
          alignContent:'center',
          alignItems: 'center',
          height: '115px',

        },
        '@media (max-width: 600px)': {
          flexDirection: 'column',  
          ml:10,
          mt:2,
          mb:0,
          p:0,
          alignContent:'center',
          alignItems: 'center',
          height: '120px',
        }, justifyContent:  'space-between' }}>
        
        <Card elevation="0" alignItems="center" sx={{ p: 2 }}>
          <Person2OutlinedIcon  />
          <Typography sx={{ m: 0, fontWeight: 'bold', fontSize: '14px' }}>Profile</Typography>
        </Card>

        <Popup
      
          contentStyle={{
            
            width: '90%',
            overflowY: 'auto',
            backgroundColor: 'lightblue',
            borderRadius: '3%',
            height: '70%',
            maxWidth: '95vw',
            maxHeight: '90vh',
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          }}
          trigger={
            <Card elevation="0" sx={{cursor:'pointer', p: 2 }}>
              <FavoriteBorderIcon />
              <Typography sx={{ m: 0, fontWeight: 'bold', fontSize: '14px' }}>Wish</Typography>
            </Card>
          }
        >
          <WishList  />
        </Popup>

        <Popup
          contentStyle={{
            width: '50%',
            overflowY: 'auto',
            backgroundColor: 'lightblue',
            borderRadius: '3%',
            height: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          }}
          trigger={
            <Card elevation="0" sx={{ cursor:'pointer', p: 2 }}>
              <ShoppingBagOutlinedIcon />
              <Typography sx={{ m: 0, fontWeight: 'bold', fontSize: '14px' }}>Bag</Typography>
            </Card>
          }
        >
          <AddtoBag />
        </Popup>
      </Stack>
    </Stack>

    
    
    
  );
};

export default Header;
