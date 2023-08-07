import React ,{useState} from 'react'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Box, Button, Card, Paper, Stack, Typography,Menu, colors ,FormControl,InputLabel, Select,MenuItem} from '@mui/material';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Header from '../Header/Header';
import SortList from './SortList';
import { Sort } from '../utils/constants';

    
const DropdownMenuButton = ({ buttonText, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="secondary"
        sx={{ fontSize: '13px', mt: '25px', borderRadius: 50, width: '120px' }}
      >
        {buttonText} <ExpandMoreOutlinedIcon />
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleCloseMenu}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};



const Filter = ({

selectedSort,
selectSort,
}) => {

  const theme = useTheme();

  const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumDevice = useMediaQuery(theme.breakpoints.between('sm', 'md'));




  
  
  const countryOfOriginItems = ['All country', 'India'];
  const fabricItems = ['Cotton', 'Liva' ,'Nylon' , 'Silk' , 'Polycotton' , 'Linen Blend' , 'Smart Fit'];
  const fitItems = ['Boxy', 'Oversized' , 'Regular Fit' , 'Skinny Fit' , 'Slim Fit'];
  const lengthItems = ['Crop', 'Longline' , 'Regular'];
  const ratingItems = ['1 & Above', '2 & Above','3 & Above','4 & Above','5 & Above'];
  const sizeItems = ['S','M','L','XL','XXL' , '40' , '30' ,'28'];
    
  return (
    <>
{
  isSmallDevice  || isMediumDevice? null : (
    <Stack  direction='row' alignItems='center' sx={{flex: 1,mb:3}}>
        <Typography sx={{ml:5,mr:15 , fontSize:'15px' , fontWeight:'bold' ,mt:'25px'}}> FILTERS</Typography>
      
        
        <Stack direction="row" sx={{ zIndex: 1 }}>
      <DropdownMenuButton buttonText="Ads on" menuItems={['Comes with a Mask']} />
      <DropdownMenuButton buttonText="Country of origin" menuItems={countryOfOriginItems} />
      <DropdownMenuButton buttonText="Fabric" menuItems={fabricItems} />
      <DropdownMenuButton buttonText="Fit" menuItems={fitItems} />
      <DropdownMenuButton buttonText="Length" menuItems={lengthItems} />
      <DropdownMenuButton buttonText="Rating" menuItems={ratingItems} />
      <DropdownMenuButton buttonText="Size" menuItems={sizeItems} />
    </Stack>
    









{/* Sort Bar  */}


    <FormControl fullWidth  sx={{ ml: '15%', mt: 0, height: 80, borderRadius: 50 }} >
    <Typography sx ={{fontWeight:'bold' , fontSize:'15px',mt:1,mb:0,pb:0}}>Sort By:</Typography>
    <Select sx={{maxWidth:250 ,ml:0,mt:0, height:40 , justifyContent:'left'}}
        fullWidth
        labelId="simple-select-label"
        id="simple-select"
        
    >
        <SortList 
         option={Sort}
         value={selectedSort}
         selectToggle={selectSort}
         label="Sort By"
        
        />

      </Select>
      
    </FormControl>
        
    </Stack>
  )
}
    </>
        
    
    
  )
}

export default Filter