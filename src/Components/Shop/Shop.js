import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log('product received');
            })
    }, [])

    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                console.log(savedCart[key]);
                const addedProduct = products.find(product => product.key
                    === key);
                    if (addedProduct) {
                        const quantity = savedCart[key]
                    }
                storedCart.push(addedProduct);

            }
            setCart(storedCart)
        }
        console.log(savedCart)

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)


    }

    return (
        <div className='shop-container'>

            <div className="product-container">

                {
                    products.map(product => <Product key={product.key}
                        handleAddToCart={handleAddToCart}
                        product={product}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;