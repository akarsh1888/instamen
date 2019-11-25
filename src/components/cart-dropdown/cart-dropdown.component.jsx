import React from 'react';

//Custom Button Component
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './cart-dropdown.styles.scss';

// CartItemsindropdown
import  CartItemsDropDown  from '../cart-items-dropdown/cart-items-dropdown.component';

// Redux Central Store
import { connect } from "react-redux";

const CartDropDown = ({cartItemsFromCentralStore}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItemsFromCentralStore.map((oneCartItem) =>(
                    <CartItemsDropDown key={oneCartItem.id} oneCartItem={oneCartItem} /> ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProps = rootreducerstate => ({

    cartItemsFromCentralStore : rootreducerstate.cart.cartItemsArray
});

export default connect(mapStateToProps,null)(CartDropDown);