import React, {useState} from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cname, setCname] = useState('country');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const countryName = (value) => {
    setCname(value)
    setAnchorEl(null);
  }

  return (
    <div>
      <div aria-controls="simple-menu" style={{cursor: 'pointer',display: 'inline-flex'}} aria-haspopup="true" onClick={handleClick}>
        {cname} <ArrowDropDownIcon />
      </div>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        
      >
        <MenuItem onClick={()=> countryName('India')} style={{minWidth: '120px',fontFamily: 'poppins',fontWeight: '600'}}>India</MenuItem>
        <MenuItem onClick={()=> countryName('UAE')} style={{minWidth: '120px',fontFamily: 'poppins',fontWeight: '600'}}>UAE</MenuItem>
        <MenuItem onClick={()=> countryName('Qatar')} style={{minWidth: '120px',fontFamily: 'poppins',fontWeight: '600'}}>Qatar</MenuItem>
      </Menu>
    </div>
  );
}
