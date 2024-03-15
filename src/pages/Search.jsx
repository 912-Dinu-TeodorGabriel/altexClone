import React from 'react';
import Filters from '../components/Filters';
import Products from '../components/Products';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import { OpacityProvider } from '../hooks/OpacityContext';
import StickyBox from 'react-sticky-box';


const Search  = ({product}) => {
  return (
    <>
      <OpacityProvider>
      <Header />
      <NavBar />
        <div className = "filtersProducts" style={{display: "flex", alignItems: "flex-start"}}>
          <StickyBox offsetTop={20}>
            <Filters />
          </StickyBox>
          <Products e = {product} />
        </div>
      </OpacityProvider>
    </>
  )
};
export default Search;