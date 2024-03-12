import React, { useState, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import styles from "../styling/Header.module.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Button  from '@mui/material/Button';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '57vh',
        '&:focus': {
          width: '73vh',
        },
      },
    },
  }));

function Header() {
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
        <div className={styles.headerBar}>
            {showLetters ? (
            <>
              <Link reloadDocument to="/">
                  <img src="https://lcdn.altex.ro/render/_next/static/media/altex.c8989614.svg"/>
              </Link>
              <Search>
                  <SearchIconWrapper>
                  <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                  placeholder="Cauta produsul dorit"
                  inputProps={{ 'aria-label': 'search' }}
                  />
              </Search>
              <div>
                  <Button className = "custom-button" variant="contained">
                      <ShoppingCartIcon />
                      {showLetters ? 'Cosul meu' : ''}
                  </Button>
                  <Button className = "custom-button" variant="contained">
                      <AccountCircleIcon />
                      {showLetters ? 'Cont' : ''}

                  </Button>
              </div>
            </>):(
            <>
              <div style = {{display: 'flex', flexDirection:'column'}}>
              <Link reloadDocument to="/">
                <img src="https://lcdn.altex.ro/render/_next/static/media/altex.c8989614.svg"/>
                </Link>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    />
                </Search>
                </div>
                <div>
                    <Button className = "custom-button" variant="contained">
                        <ShoppingCartIcon />
                    </Button>
                    <Button className = "custom-button" variant="contained">
                        <AccountCircleIcon />
                    </Button>
                </div>
            </>)}

        </div>
    )
}
export default Header;