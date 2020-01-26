import React from 'react';

// Styles
import './checkout.styles.scss';

// Connect to central store
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

//import { createStructuredSelector } from 'reselect';

// Component
import CheckoutItem from '../../components/checkout-items/checkout-item.component';
import Header from '../../components/header/header.component';
// Selectors for cartItemsArray & cartTotal
import { selectCartItemsArraySelector, selectCartTotalPriceSelector } from '../../redux/cart/cart.selectors';





const CheckoutPage = ({ cartItemsArray, cartItemsArrayTotalPrice}) => (
    
    <div>
        <Header showcase='checkoutpageshowcase'
        title="luxurious rooms"
        subtitle="deluxe rooms starting at $299"
      >
          <Link to="/" className="btn">
            our rooms
          </Link>
        </Header>
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
</div>
    );
    
    

    



const mapStateToProps = (state) => ({
    cartItemsArray: selectCartItemsArraySelector(state),
    cartItemsArrayTotalPrice: selectCartTotalPriceSelector(state)
});




export default connect(mapStateToProps)(CheckoutPage);