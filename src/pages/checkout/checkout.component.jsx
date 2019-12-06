import React from 'react';

// Styles
import './checkout.styles.scss';

// Connect to central store
import { connect } from 'react-redux';

//import { createStructuredSelector } from 'reselect';

// Component
import CheckoutItem from '../../components/checkout-items/checkout-item.component';

// Selectors for cartItemsArray & cartTotal
import { selectCartItemsArraySelector, selectCartTotalPriceSelector } from '../../redux/cart/cart.selectors';





const CheckoutPage = ({ cartItemsArray, cartItemsArrayTotalPrice}) => (
    
    <div className='checkout-page'>
        
        <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
        </div>
        {
            cartItemsArray.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))
        };
                
          
        
        <div className='total'>TOTAL: ${cartItemsArrayTotalPrice}</div>
    </div>
);
    






const mapStateToProps = (state) => ({
    cartItemsArray: selectCartItemsArraySelector(state),
    cartItemsArrayTotalPrice: selectCartTotalPriceSelector(state)
});




export default connect(mapStateToProps)(CheckoutPage);