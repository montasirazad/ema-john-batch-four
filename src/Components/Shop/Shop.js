import React, { useEffect, useState } from 'react';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className='shop-container'>

            <div className="product-container">
                <h3>Products: {products.length}</h3>
                {
                    products.map(product =>{console.log(product)})
                }
            </div>

            <div className="cart-container">
                <h3>Order summary</h3>
                <h3>items ordered</h3>
            </div>
        </div>
    );
};

export default Shop;