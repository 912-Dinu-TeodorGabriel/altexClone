import React, { useState } from 'react';
import {Link} from "react-router-dom";
import styles from '../styling/Products.module.css';
import imageLaptop from './assets/unknown.jpeg';
import phonesEntities from '../entities/phones.json';
import laptopsEntities from '../entities/laptop.json';
import tvEntities from '../entities/tv.json';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Button  from '@mui/material/Button';
import { useOpacity } from '../hooks/OpacityContext';
import Rating from '@mui/material/Rating';

function Products({e}) {
    const [newEntityName, setNewEntityName] = useState('');
    const { opacity } = useOpacity();
    let entities = [];
    if(e === 'phones'){
        entities = phonesEntities;
    }
    else if(e === 'laptops'){
        entities = laptopsEntities;
    }
    else if(e === 'tv'){
        entities = tvEntities;
    }
    else if(e === 'all'){
        entities = Array.from(new Set([...laptopsEntities, ...phonesEntities, ...tvEntities]));
    }
    const [entitiesState, setEntitiesState] = useState(entities); // Initialize with your initial entities array

    const [hiddenItems, setHiddenItems] = useState(Array.from({ length: entities.length }, () => false));
    const [isEditable, setIsEditable] = useState(false);

    const handleInputChange = (index, event) => {
        const { value } = event.target;
        const updatedEntities = [...entitiesState];
        updatedEntities[index].productName = value;
        setEntitiesState(updatedEntities);
    };

    const handleEditToggle = () => {
        setIsEditable(!isEditable);
    };

    const handleClick = (index) => {
        const newHiddenItems = [...hiddenItems];
        newHiddenItems[index] = !hiddenItems[index];
        setHiddenItems(newHiddenItems);
    };

    const handleAdd = () => {
        const newEntity = { 
            productName: newEntityName,
            image: `${newEntityName}.jpg` // Concatenate the productName with '.jpg' using template literals
        };
        setEntitiesState([...entitiesState, newEntity]);
        setHiddenItems([...hiddenItems, false]);
        setNewEntityName(''); // Clear the input
    };
    

    return (
        <div style={{ opacity }}>
        <EditIcon onClick={handleEditToggle} style={{
                        marginTop: '15px'}}/>
        <div className={styles.products}>
            {entitiesState.map((entity, index) => (
                <>
                {hiddenItems[index] == false && (
                <div className="product" key={index} style = {{marginRight: '10px'}}>
                    <div style = {{display: 'flex', flexDirection: 'column'}}> 
                        <DeleteForeverIcon
                            className= "deleteButton"
                            onClick={() => handleClick(index)}
                        />
                        <img src={imageLaptop} className= "imageProduct" />
                    </div>
                    {isEditable ? (
                        <input 
                            type="text" 
                            value={entity.productName} 
                            onChange={(event) => handleInputChange(index, event)} 
                            className="detailsProduct" 
                        />
                    ) : (
                        <p style = {{margin: '0', fontSize: '17px'}}
                            className= "detailsProduct" >  
                            <Link to={`/product/${entity.image.slice(0,-4)}`} style={{ color: 'white', textDecoration: 'none' }}>
                                {entity.productName}
                            </Link>
                        </p>
                    )}
                    <div style = {{display: 'flex', flexDirection: 'column'}}>
                        <Rating name="read-only" precision={0.1} value={entity.rating} readOnly/>
                        <p style={{margin: '0', fontSize:'14px'}}>Price: {entity.price}</p>
                    </div>
                    <Button className= "custom-button">Adauga in cos</Button>
                </div>)}</>

            ))}
            <AddCircleOutlineIcon style={{ fontSize: '10rem',
                                            padding: '4rem 0 0 0.5rem'}} onClick={() => handleAdd('eu')} />
        </div>
        </div> 

    );
}

export default Products;
