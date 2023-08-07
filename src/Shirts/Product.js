import React, { useEffect, useState } from 'react'
import { Stack,Box, Divider, Typography } from '@mui/material';
import Sidebar from '../SideBar/Sidebar';
import { products } from '../utils/constants';
import ListMap from './ListMap';
import EmptyList from './EmptyList';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';



const Product = () => {
    const [selectedGender,setSelectedGender ] = useState(null);
    const [selectedSort , setSelectedSort] = useState(null);
    const [Brand , setBrand] = useState([
        { id: 1, checked: false, label:'Roadster' },
        { id: 2, checked: false, label:'Van Heusen' },
        { id: 3, checked: false, label:'Indian Terrain' },
      ]);

    const [Discount , setDiscount] = useState([
            {id:1,checked:false,label:'10% OFF'},
            {  id:2,checked:false,  label:'20% OFF'  },
            {  id:3,  checked:false,  label:'30% OFF'},
            {  id:4,    checked:false,    label:'40% OFF'}
          ]);

    const [Price , setPrice] = useState([
      {
        id:1,
        checked:false,
        label:'0-999',
        label1:377,
        label2:1999
      },
      {
          id:2,
        checked:false,
        label:'1999-2999',
          label1:1500,
          label2:2999
      },
      {
          id:3,
        checked:false,
        label:'2999-3999',
          label1:3777,
          label2:3999
      }
    ]);
    


      
    
      const [list,setList] = useState(products);
      const [resultsFound, setResultsFound] = useState(true);
      const [input, SetInput] = useState([
        { id: 1, checked: false, name:'LOCOMOTIVE' },
        { id: 2, checked: false, name:'Mast & Harbour' },
        { id: 3, checked: false, name:'RARE RABBIT' },
        {id:4 , checked:false , name:'ADI'},
        {id:5,checked:false,name:'PIKO'},
        {id:6, checked:false,name:'Nike 12'}

      ]);
    
      const handleSelectGender = (event, value) =>
      !value ? null : setSelectedGender(value);

      const handleSelectSort = (event ,value) => !value ? null : setSelectedSort(value);

      const handleChangeChecked = (id) => {
        const BrandStateList = Brand;
        const changeCheckedBrand = BrandStateList.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        );
        setBrand(changeCheckedBrand);
      };

      const handleSearch = (value,id) => {
        if(!value){
          const resetInputList = input.map((item) => ({ ...item, checked: false }));
          SetInput(resetInputList);
          setList(products); 
          setResultsFound(true);
        }else{
          const SearchList = input;
          const changeCheckedList = SearchList.map((item) =>item.name === value ? { ...item , checked: !item.checked} : item);
  
          SetInput(changeCheckedList);
          console.log(changeCheckedList);
        }
      
      };

      const handleChangeDiscount = (id) => {
        const DiscountList = Discount;
        const changeCheckedDiscount = DiscountList.map((item) => item.id === id ? { ...item , checked: !item.checked} : item);
        setDiscount(changeCheckedDiscount);
        
      }

      const handlePrice =(id,label1,label2) => {
        const PriceList = Price;
        const changeCheckedPrice = PriceList.map((item) => item.id === id ? {...item , checked: !item.checked} : item );
        setPrice(changeCheckedPrice);
      }

    

  const applyFilters = () => {
        let updatedList = products;

      
        if (selectedGender) {
            updatedList = updatedList.filter(
              (item) => (item.Gender) === (selectedGender),
            );
          }
          
        if(selectedSort){
          updatedList = updatedList.filter(
            (item) => (item.Sort) === (selectedSort),
          );
        }
        console.log(Brand)
        const BrandChecked = Brand.filter((item) => item.checked).map((item) => item.label.toLowerCase());
        
      if (BrandChecked.length) {
        updatedList = updatedList.filter((item) =>
          BrandChecked.includes(item.Brand)
        );
      }
      
      const selectedFilter = input.filter((item) => item.checked).map((item) => item.name);

      console.log(selectedFilter)
      if(selectedFilter.length){
        updatedList = updatedList.filter((item) =>
        selectedFilter.includes(item.name)
      );
      }

      const DiscountChecked = Discount.filter((item) => item.checked).map((item) => item.label);

      if(DiscountChecked.length) {
        updatedList = updatedList.filter((item) => DiscountChecked.includes(item.Discount));
      }

      const PriceChecked = Price.filter((item) => item.checked).map((item) => item.label1)

      if(PriceChecked.length){
        updatedList = updatedList.filter((item) => PriceChecked.includes(item.price));
      }

      // if(filterList.length){
      //   updatedList = updatedList.filter((item) => PriceChecked.includes(item.name));
      // }
      
      setList(updatedList);

      !updatedList.length ? setResultsFound(false) : setResultsFound(true);

    };

    useEffect(() => {
        applyFilters();
      }, [selectedGender , Brand, Discount,Price, selectedSort, input]);
    
  return (
<>
<Header selectValue = {handleSearch} />
<Typography sx={{ml:5 , fontSize:'15px' , mb:2}}>Home / Clothing / Shirts For Men & Women</Typography>
<Typography sx={{ml:5 , fontSize:'15px' , fontWeight:'bold'}}>Shirts For Men & Women</Typography>
    
<Filter 

  selectedSort = {selectedSort}
  selectSort = {handleSelectSort}
  
/>
<Divider/>
<Stack sx={{ flexDirection: { sx: 'column', md: 'row' }}}>
    <Box sx={{ height: { sx: 'auto' }, px: { sx: 0, md: 2 } }}>
    <Sidebar 
    selectedGender={selectedGender} 
    selectGender ={handleSelectGender}
    Brands={Brand}
    changeChecked={handleChangeChecked}
    changeCheckedDiscount={handleChangeDiscount}
    Discounts = {Discount}
    Price = {Price}
    changeCheckedPrice = {handlePrice}
    />
    </Box>
    <Divider orientation="vertical" sx={{height: 'auto'}}/>
    <Box sx={{ overflowY: 'auto', height: '90vh', flex: 2, color: 'black', display: 'flex', flexDirection: 'column' }}>    
    {
      
      
         resultsFound ? <ListMap list={list} /> : <EmptyList/> 
      
        
    }

    </Box>
    </Stack>
</>
  
  )
}

export default Product