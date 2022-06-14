import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total) * .1;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order summary</h3>
            <h3>items ordered: {cart.length}</h3>
            <p>Total: {total}</p>
            <p><small>Shipping charge: {shipping}</small></p>
            <p><small>Tax: {tax.toFixed(2)}</small></p>
            <p>Total price: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;