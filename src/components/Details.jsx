import React, { useState, useEffect } from 'react';
import { useOpacity } from '../hooks/OpacityContext';
import styles from '../styling/Details.module.css';
import imageDetails from './assets/unknown.jpeg';
import Button  from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText, Popover } from '@mui/material';
function Details({ foundItem }) {
    const { opacity } = useOpacity();
    const [showLetters, setShowLetters] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'specifications-list' : undefined;
  
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
    return(
        <div style={{ opacity }}>
            <div className={styles.details}>
                {foundItem ? (
                    <>  
                        <h2 className={styles.titleDetails}>{foundItem.productName && foundItem.productName}</h2>
                        <Rating name="read-only" precision={0.1} value={foundItem.rating} readOnly/>
                        <p>Rating: {foundItem.rating && foundItem.rating}</p>
                        {showLetters ? (
                        <div className={styles.imagePriceContainer}>
                            <img className={styles.imageDetails} src={imageDetails} alt="Product" />
                            <p className={styles.priceContainer}> Price: {foundItem.price && foundItem.price}</p>
                        </div>
                        ):(
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                <div style={{display: 'flex', width:'10vh'}}>
                                    <img className={styles.imageDetails} src={imageDetails} alt="Product" />
                                </div>
                                <p> Price: {foundItem.price && foundItem.price}</p>
                            </div>
                        )}
                        <div className={styles.descriptionContainer}>
                            <h2>Description</h2>
                            <p>{foundItem.description && foundItem.description}</p>
                        </div>
                        <div className={styles.specificationsContainer}>
                            <h2>Specifications</h2>
                                {foundItem.cpu && <p>CPU: {foundItem.cpu}</p>}
                                {foundItem.ram && <p>RAM: {foundItem.ram}</p>}
                                {foundItem.storage && <p>Storage: {foundItem.storage}</p>}
                                {foundItem.screen && <p>Screen: {foundItem.screen}</p>}
                                {foundItem.resolution && <p>Resolution: {foundItem.resolution}</p>}
                                {foundItem.displayTechnology && <p>Display Technology: {foundItem.displayTechnology}</p>}
                        </div>
                    </>
                ) : (
                    <p>No product found for the specified image.</p>
                )}
            </div>
        </div>
    );
}
export default Details;