
import React from 'react';
import ProductCard from './productCard';


const ProductList = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts") 
    const products = await res.json()

    return (
        <div>
        {products.map(product => <ProductCard/>)}
        </div>
    );
};

export default ProductList;