import React from 'react';
import './App.css';
import Product  from './components/product'
import productData from './data/products.json'

function App() {
  
  const mappedProducts =  productData.map(product => {
    return  <Product name={product.name} />
  })

  return (
    <div className="App">
      <h1>Hello world</h1>
     {mappedProducts}
    </div>
  );
}

export default App;
