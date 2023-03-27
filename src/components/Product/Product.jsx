import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //  console.log(props.HandleAddToCard);
     const {name, price, img, ratings, seller } = props.product;
    const HandleAddToCard = props.HandleAddToCard;


    return (
        <div>
            <div className="card w-100 bg-blue-50 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2>{name}</h2>
                    <p> Price : ${price}</p>

                    <p>Manufacturer : {seller}</p>
                    <p> Rating : {ratings} Star</p>
                    <div className="w-full">
                    <button onClick={()=>HandleAddToCard(props.product)} className="btn btn-primary my-3 w-full">
                        <span className='mx-3'>Add to Card</span>
                        <FontAwesomeIcon icon={ faShoppingCart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

