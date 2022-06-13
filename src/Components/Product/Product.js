import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from "@fortawesome/free-solid-svg-icons"

const Product = (props) => {
    // console.log(props);
    const { name, img, price, stock, seller } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3>
                <p>Seller: {seller}</p>
                <p>Price: {price} $</p>
                <p>Only left: {stock}</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='btn-regular'>
                    <FontAwesomeIcon icon={faCartPlus} />
                    Add to cart</button>
            </div>
        </div>
    );
};

export default Product;