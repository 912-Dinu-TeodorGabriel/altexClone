import React, { useState, useEffect } from 'react';
import styles from'../styling/Filters.module.css';
import { useOpacity } from '../hooks/OpacityContext';
function Filters(){
    const [buttonColors, setbuttonColors] = useState({}); // State to manage button colors
    const { opacity } = useOpacity();
    const handleClick = (buttonId) => {
        setbuttonColors(prevColors => ({
          ...prevColors,
          [buttonId]: '#800080' // Change the color of the clicked button to purple
        }));
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
        <div style = {{opacity: opacity}} className={styles.filters}>
            <div className="filter">
                <p>{showLetters ? 'Disponibilitate' : 'Disponibil'}</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button1')} style = {{ backgroundColor: buttonColors['button1'], color: 'white'}}> In Stoc</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button2')} style = {{ backgroundColor: buttonColors['button2'], color: 'white'}}>Resigilate</button>
            </div>
            <div className="filter">
                <p>Pret</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button3')} style = {{ backgroundColor: buttonColors['button3'], color: 'white'}}>0 - 1000</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button4')} style = {{ backgroundColor: buttonColors['button4'], color: 'white'}}>1000 - 2000</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button5')} style = {{ backgroundColor: buttonColors['button5'], color: 'white'}}>2000 - 3000</button>
            </div>
            <div className="filter">
                <p>Nota minima</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button6')} style = {{ backgroundColor: buttonColors['button6'], color: 'white'}}>1</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button7')} style = {{ backgroundColor: buttonColors['button7'], color: 'white'}}>2</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button8')} style = {{ backgroundColor: buttonColors['button8'], color: 'white'}}>3</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button9')} style = {{ backgroundColor: buttonColors['button9'], color: 'white'}}>4</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button10')} style = {{ backgroundColor: buttonColors['button10'], color: 'white'}}>5</button>
            </div>
            <div className="filter">
                <p>Brand</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button11')} style = {{ backgroundColor: buttonColors['button11'], color: 'white'}}>Asus</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button12')} style = {{ backgroundColor: buttonColors['button12'], color: 'white'}}>MSI</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button13')} style = {{ backgroundColor: buttonColors['button13'], color: 'white'}}>Lenovo</button>
            </div>
            <div className="filter">
                <p>Procesor</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button14')} style = {{ backgroundColor: buttonColors['button14'], color: 'white'}}>Intel</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button15')} style = {{ backgroundColor: buttonColors['button15'], color: 'white'}}>AMD</button>
            </div>
            <div className="filter">
                <p>Placa video</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button16')} style = {{ backgroundColor: buttonColors['button16'], color: 'white'}}>Nvidia</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button17')} style = {{ backgroundColor: buttonColors['button17'], color: 'white'}}>AMD</button>
            </div>
            <div className="filter">
                <p>Memorie RAM</p>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button18')} style = {{ backgroundColor: buttonColors['button18'], color: 'white'}}>4GB</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button19')} style = {{ backgroundColor: buttonColors['button19'], color: 'white'}}>8GB</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button20')} style = {{ backgroundColor: buttonColors['button20'], color: 'white'}}>16GB</button>
                <button className="buttonFilter" variant="contained"  onClick={() => handleClick('button21')} style = {{ backgroundColor: buttonColors['button21'], color: 'white'}}>32GB</button>
            </div>
        </div>
    );
}
export default Filters;