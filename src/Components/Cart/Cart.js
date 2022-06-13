import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const  cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
 

    return (
        <div>
            <h3>Order summary</h3>
            <h3>items ordered: {cart.length}</h3>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cart;