import React from 'react';
import './Product.css';


const Product = (props) => {
    console.log(props.product);
    const { name, img, price, stock, seller } = props.product

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
            </div>
        </div>
    );
};

export default Product;