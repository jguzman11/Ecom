import React from 'react';
import './App.css';
import Product  from './components/product'
import productData from './data/products.json'
import { Pane, Text, Button, Heading, majorScale, Paragraph, Link, Strong, Small, Code, Icon, Pre, UnorderedList, ListItem, TextInput, SearchInput} from 'evergreen-ui'

function Products() {
  
  const mappedProducts =  productData.map(product => {
    return <Product name={product.name} price={product.price} description={product.description} img={product.img} />
      
  })

  return (
    <div className="App">
              <SearchInput placeholder="We can Serach for shoes here.." width="100%" ></SearchInput>
     {mappedProducts}
    </div>
  );
}

export default Products;
