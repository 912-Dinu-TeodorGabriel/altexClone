import React, {useState, useEffect } from 'react';
import styles from'../styling/Navbar.module.css';
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Button  from '@mui/material/Button';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useOpacity } from '../hooks/OpacityContext';

const NavBar = () =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { setOpacity } = useOpacity();
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpacity(0.1);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setOpacity(1);
    };
    const [showLetters, setShowLetters] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        // Condition to determine when to show/hide letters
        setShowLetters(window.innerWidth > 600); // Adjust this value as needed
      };

      window.addEventListener('resize', handleResize);

      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // Empty dependency array means this effect runs only once after the component mounts
  
    return (
    <div className={styles.navBar}>
        <div>
            <Button className = "custom-button" variant="contained" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <MenuIcon />
                {showLetters ? 'Produse' : ''}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>
                    <Link reloadDocument to="/lap">
                        Laptop-uri
                    </Link>
                    <KeyboardArrowRightIcon />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link reloadDocument to="/phone">
                        Telefoane
                    </Link>
                    <KeyboardArrowRightIcon />
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link reloadDocument to="/tv">
                        Televizoare
                    </Link>
                    <KeyboardArrowRightIcon />
                </MenuItem>
            </Menu>
        </div>
        <div >
            {showLetters &&(
            <>
                <Button className = "custom-button" variant="contained"   onClick={() => alert('Promotii')}>
                    Promotii
                </Button>
                <Button className = "custom-button" variant="contained"  onClick={() => alert('Finantare')}>
                    Finantare
                </Button>
                <Button className = "custom-button" variant="contained"  onClick={() => alert('Suport clienti')}>
                    Suport clienti
                </Button>
                <Button className = "custom-button" variant="contained"  onClick={() => alert('Magazine')}>
                    Magazine
                </Button>
            </>
            )}
        </div>
    </div> 

    );
}

export default NavBar;