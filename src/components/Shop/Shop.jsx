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
        <div className='shop-container'>
            
                <div className="grid grid-cols-3 gap-3">
                    {
                        products.map(product => <Product product={product} key= {product.id} HandleAddToCard = {HandleAddToCard}></Product>)
                    }
                </div>
            
            <div className='card-container text-center font-bold text-lg my-3'>
                <h1>Card summary</h1>
                <p>Selected Items : {card.length}</p>
            </div>
        </div>
    );
};

export default Shop;