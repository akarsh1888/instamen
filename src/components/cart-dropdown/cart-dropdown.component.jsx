import React from 'react';

//Custom Button Component
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './cart-dropdown.styles.scss';

const CartDropDown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropDown;