import React, { useState, useEffect } from 'react';
import { useOpacity } from '../hooks/OpacityContext';
import styles from '../styling/Details.module.css';
import imageDetails from './assets/unknown.jpeg';
import Button  from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Details = ({ foundItem }) => {
    const { opacity } = useOpacity();
    const [showLetters, setShowLetters] = useState(true);

    const [checkedSpec, setCheckedSpec] = React.useState(false);
    const handleChangeSpec = () => {
      setCheckedSpec((prev) => !prev);
    };
    const [checkedDesc, setCheckedDesc] = React.useState(false);
    const handleChangeDesc = () => {
      setCheckedDesc((prev) => !prev);
    };

  
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
                        <h2>{foundItem.productName && foundItem.productName}</h2>
                        <Rating name="read-only" precision={0.1} value={foundItem.rating} readOnly/>
                        <p>Rating: {foundItem.rating && foundItem.rating}</p>
                        {showLetters ? (
                        <div className={styles.imagePriceContainer}>
                            <img src={imageDetails} alt="Product" />
                            <div style={{display: 'flex', flexDirection:'column'}}>
                              <p className={styles.priceContainer}> Price: {foundItem.price && foundItem.price} lei</p>
                              <Button className='custom-button'>
                                Adauga in cos
                              </Button>
                            </div>
                        </div>
                        ):(
                            <div style={{display: 'flex', flexDirection:'column', width:'30vh'}}>
                                <img className={styles.imageDetails} src={imageDetails} alt="Product" />
                                <p> Price: {foundItem.price && foundItem.price}</p>
                                <Button className='custom-button'>
                                    Adauga in cos
                                </Button>
                            </div>
                        )}
                        <div className={styles.underContainer}>
                          <div className={styles.descriptionContainer}>
                            <Button
                              className={styles.democustomizedbutton}
                              variant="contained"
                                disableElevation
                              onClick={handleChangeDesc}
                              endIcon={<KeyboardArrowDownIcon />}
                            >
                              <h3>Description</h3>  </Button>
                              <h5 style={{display: checkedDesc ? 'flex' : 'none', width: showLetters ? '120ch' : '35ch', textAlign: 'left'}}>{foundItem.description && foundItem.description}</h5>
                          </div>
                          <div className={styles.specificationsContainer}>
                            <Button
                                className={styles.democustomizedbutton}
                                variant="contained"
                                disableElevation
                                onClick={handleChangeSpec}
                                endIcon={<KeyboardArrowDownIcon />}
                              >
                            <h3>Specifications</h3>  </Button>
                            <div style={{display: checkedSpec ? 'flex' : 'none', flexDirection:'column', width: '100%', marginLeft:'2em', boxSizing:'border-box'}}>
                                {foundItem.cpu && (<><h3>CPU:</h3> <h5> {foundItem.cpu}</h5></>)}
                                {foundItem.ram && (<><h3>RAM:</h3> <h5> {foundItem.ram}</h5></>)}
                                {foundItem.storage && (<><h3>Storage:</h3> <h5> {foundItem.storage}</h5></>)}
                                {foundItem.screen && (<><h3>Screen:</h3> <h5> {foundItem.screen}</h5></>)}
                                {foundItem.resolution && (<><h3>Resolution:</h3> <h5> {foundItem.resolution}</h5></>)}
                                {foundItem.displayTechnology && (<><h3>Display Technology:</h3> <h5> {foundItem.displayTechnology}</h5></>)}  
                            </div>
                          </div>
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