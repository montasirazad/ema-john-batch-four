import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data)
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
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct);
                    storedCart.push(addedProduct);
                }


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

    const handleSearch = e => {
        const searchText = e.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProduct);
    }

    return (
        <>
            <div className="search-container">
                <input type="text" onChange={handleSearch} placeholder='Search product' />
            </div>
            <div className='shop-container'>

                <div className="product-container">
                    {/* <h3>total: {products.length}</h3>
                    <h3>total: {displayProducts.length}</h3> */}
                    {
                        displayProducts.map(product => <Product key={product.key}
                            handleAddToCart={handleAddToCart}
                            product={product}></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart} />
                </div>
            </div>
        </>
    );
};

export default Shop;