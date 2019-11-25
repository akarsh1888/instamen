import React from 'react';

//Custom Button Component
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './cart-dropdown.styles.scss';

// CartItemsindropdown
import  CartItemsDropDown  from '../cart-items-dropdown/cart-items-dropdown.component';


// Connect to Redux Central Store
import { connect } from "react-redux";

// Now accessing/subscribing (cartItemsArray) with the help of selectors
import { selectCartItemsArray } from "../../redux/cart/cart.selectors";



const CartDropDown = ({cartItemsArrayFromCentralStore}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItemsArrayFromCentralStore.map((oneCartItem) =>(
                    <CartItemsDropDown key={oneCartItem.id} oneCartItem={oneCartItem} /> ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProps = rootreducerstate => ({
       
    // ----Earlier accessing (cartItemsArray) directly without selectors from central store
    // cartItemsArrayFromCentralStore: rootreducerstate.cart.cartItemsArray


    cartItemsArrayFromCentralStore: selectCartItemsArray(rootreducerstate)
});



export default connect(mapStateToProps,null)(CartDropDown);