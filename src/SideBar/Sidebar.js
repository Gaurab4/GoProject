import React from 'react'
import { Divider, List,FormControlLabel, Stack, Typography,Checkbox, Button, Paper } from '@mui/material';
import GenderList from './GenderList';
import {  Gender } from '../utils/constants';
import { BrandList } from './BrandList';
import { DiscountList } from './DiscountList';
import { PriceList } from './PriceList';

const Sidebar = ({
  selectedGender,
  selectGender,
  Brands,
  changeChecked,
  changeCheckedDiscount,
  Discounts,
  Price , 
  changeCheckedPrice
}) => {

  return (
    <Stack
     direction={"row"}
     
    sx={{
      paddingTop:{xs:4},
      overflowY:'auto',
      height:{sx:'auto' , md:'95%'},
      flexDirection:{md:'column'},
      maxHeight: '100vh'
    }}>
    <Paper elevation={0} sx={{display:'flex' }}>
    <Typography sx={{ml:3 ,mt:3,mb:2, fontWeight:'bold' , fontSize:'15px'}}>Gender</Typography>
    
    </Paper>
    
        <GenderList
          option={Gender}
          value={selectedGender}
          selectToggle ={selectGender}
        />
        <Divider />
        
        <Typography sx={{ml:3 , fontWeight:'bold' , fontSize:'15px'}}>Brand</Typography>
          {Brands.map((Brand)=>(
            <BrandList
            key={Brand.id}
            Brand = {Brand} 
              changeChecked ={changeChecked}
            />
            ))}
        
        <Divider/>
        <Typography sx={{ml:3 , fontWeight:'bold' , fontSize:'15px'}}>Price </Typography>
        {Price.map((Pri) => (
            <PriceList
                key={Pri.id}
                Price = {Pri}
                changeCheckedPrice={changeCheckedPrice}
              />
          ))}
        <Divider/>
        <Typography sx={{ml:3 , fontWeight:'bold' , fontSize:'15px'}}>Discount </Typography>
          {Discounts.map((Discount) => (
            <DiscountList
                key={Discount.id}
                Discount = {Discount}
                changeCheckedDiscount={changeCheckedDiscount}
              />
          ))}
      
        
    </Stack>

  )
}

export default Sidebar