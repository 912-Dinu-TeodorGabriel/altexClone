import React, { useState, useEffect } from 'react';
import styles from'../styling/Filters.module.css';
import { useOpacity } from '../hooks/OpacityContext';

const Filters = () =>{
    const [buttonColors, setbuttonColors] = useState({}); // State to manage button colors
    const { opacity } = useOpacity();
    const handleClick = (buttonId) => {
        setbuttonColors(prevColors => {
            // If the button already has the desired color, reset it to an initial color
            if (prevColors[buttonId] === '#800080') {
                const { [buttonId]: removedColor, ...rest } = prevColors;
                return rest;
            }
            // Otherwise, change the color of the clicked button to purple
            return {
                ...prevColors,
                [buttonId]: '#800080'
            };
        });
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
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); // Empty dependency array means this effect runs only once after the component mounts
  
    return (
        <>
        <div style = {{ opacity: opacity}} className={styles.filters}>
            <p>{showLetters ? 'Disponibilitate' : 'Disponibil'}</p>
            <div className={styles.filter} style ={{flexDirection: showLetters ? 'row': 'column'}}>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button1')} style = {{ backgroundColor: buttonColors['button1'], color: 'white'}}> In Stoc</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button2')} style = {{ backgroundColor: buttonColors['button2'], color: 'white'}}>Resigilate</button>
            </div>
            <p>Pret</p>
            <div className={styles.filter}style ={{flexDirection: showLetters ? 'row': 'column'}}>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button3')} style = {{ backgroundColor: buttonColors['button3'], color: 'white'}}>0 - 1000</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button4')} style = {{ backgroundColor: buttonColors['button4'], color: 'white'}}>1000 - 2000</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button5')} style = {{ backgroundColor: buttonColors['button5'], color: 'white'}}>2000 - 3000</button>
            </div>
            <p>Nota minima</p>
            <div className={styles.filter}style ={{flexDirection: showLetters ? 'row': 'column'}}>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button6')} style = {{ backgroundColor: buttonColors['button6'], color: 'white'}}>1</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button7')} style = {{ backgroundColor: buttonColors['button7'], color: 'white'}}>2</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button8')} style = {{ backgroundColor: buttonColors['button8'], color: 'white'}}>3</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button9')} style = {{ backgroundColor: buttonColors['button9'], color: 'white'}}>4</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button10')} style = {{ backgroundColor: buttonColors['button10'], color: 'white'}}>5</button>
            </div>
            <p>Brand</p>
            <div className={styles.filter}style ={{flexDirection: showLetters ? 'row': 'column'}}>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button11')} style = {{ backgroundColor: buttonColors['button11'], color: 'white'}}>Asus</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button12')} style = {{ backgroundColor: buttonColors['button12'], color: 'white'}}>MSI</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button13')} style = {{ backgroundColor: buttonColors['button13'], color: 'white'}}>Lenovo</button>
            </div>
        </div>

        </>
    );
}
export default Filters;