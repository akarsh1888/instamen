import React from 'react';

//Custom Button Component
import CustomButton from '../custom-button/custom-button.component';

//Styles
import './cart-dropdown.styles.scss';

// CartItemsindropdown
import CartItemsDropDown from '../cart-items-dropdown/cart-items-dropdown.component';

// Connect to Redux Central Store
import { connect } from "react-redux";

// CartItemsArraySelector
import { selectCartItemsArraySelector } from "../../redux/cart/cart.selectors";

// WithRouter to communicate from url
import { withRouter } from "react-router-dom";

// toggleCartHiddenActionFunction
import { toggleCartHiddenActionFunction } from "../../redux/cart/cart.actions";


const CartDropDown = ({ cartItemsArrayFromCentralStore, history, toggleCartHiddenReduxCall}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {   // based on array length we will show message or the items inside it
                cartItemsArrayFromCentralStore.length ?
                    (
                        cartItemsArrayFromCentralStore.map((oneCartItem) => (
                        <CartItemsDropDown key={oneCartItem.id} oneCartItem={oneCartItem} />))
                    )
                    :   
                    <span className="empty-message">Your Cart is Empty</span>    
            }
        </div>
        <CustomButton onClick={() =>
        {
            history.push('/checkout');
            toggleCartHiddenReduxCall()
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
);






const mapStateToProps = rootreducerstate => ({
       
    // ----Earlier accessing (cartItemsArray) directly without selectors from central store
    // cartItemsArrayFromCentralStore: rootreducerstate.cart.cartItemsArray


    cartItemsArrayFromCentralStore: selectCartItemsArraySelector(rootreducerstate)
});




// Changing [hidden] from central state value
const mapDispatchToProps = dispatch => ({
    toggleCartHiddenReduxCall: () => dispatch(toggleCartHiddenActionFunction())
});




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));