import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { useParams } from 'react-router-dom';
import phoneData from '../entities/phones.json';
import laptopData from '../entities/laptop.json';
import tvData from '../entities/tv.json';
import React, { useState, useEffect } from 'react';
import Details from '../components/Details';
import { OpacityProvider } from '../hooks/OpacityContext'

function Specs() {
  let { productId } = useParams();
  productId = productId + '.jpg';
  const [foundItem, setFoundItem] = useState(null);
  useEffect(() => {
    const allProducts = [...laptopData, ...tvData, ...phoneData];
    const item = allProducts.find(product => product.image === productId);
    setFoundItem(item);
}, [productId]);
  return (
    <>
      <OpacityProvider>
        <Header />
        <NavBar />
        <Details foundItem= {foundItem} />
      </OpacityProvider>
    </>
  );
}
export default Specs;