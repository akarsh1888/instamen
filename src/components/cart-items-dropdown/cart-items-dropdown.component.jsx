import React from 'react';

// STYLES
import './cart-items-dropdown.styles.scss';

const CartItemsDropDown = ({ oneCartItem: { imageUrl, price, name, quantity } }) => (
    
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />

        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItemsDropDown;