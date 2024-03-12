import React from 'react'
import Filters from '../components/Filters'
import Products from '../components/Products'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import { OpacityProvider } from '../hooks/OpacityContext'

const Search  = ({product}) => {
  
  return (
    <>
      <OpacityProvider>
      <Header />
      <NavBar />
        <div className = "filtersProducts">
          <Filters />
          <Products e = {product} />
        </div>
      </OpacityProvider>
    </>
  )
};
export default Search;