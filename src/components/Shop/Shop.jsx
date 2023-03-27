import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products , setProducts]= useState([]);
    const [card, setCard] = useState([])

 useEffect( ()=>{
    fetch('products.json')
    .then(res => res.json())
    .then (data => setProducts(data))
 }, [])

 const HandleAddToCard = (product) =>{
    const newCard = [...card, product]
    setCard(newCard)
 }


    return (
        <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr] lg:grid-cols-[4fr_1fr] gap-3 p-5 '>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 order-2 md:order-1 lg:order-1">
                    {
                        products.map(product => <Product product={product} key= {product.id} HandleAddToCard = {HandleAddToCard}></Product>)
                    }
                </div>
            
            <div className='card-container text-center font-bold text-lg my-3 mb-11 order-1 md:order-2 lg:order-2'>
                <h1>Card summary</h1>
                <p>Selected Items : {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;