import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

// removeItemFromCartItemsArrayActionFunction
import { removeItemFromCartItemsArrayActionFunction} from '../../redux/cart/cart.actions';

// addToCartItemsActionFunction
import { addToCartItemsActionFunction } from "../../redux/cart/cart.actions";

// 
import { deleteItemQuantityCartItemsArrayActionFunction } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, deleteQuantity }) => {

    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            
            <span className='name'>{name}</span>

            <span className='quantity'>
                <div className='arrow' onClick={() => deleteQuantity(cartItem)} >
                    <span role="img" aria-label="donut"> &#10134; </span>
                </div>

                <span className='value'>{quantity}</span>
                
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    <span role="img" aria-label="donut">    &#10133; </span>
                </div>
            </span>

            <span className='price'>{price}</span>

            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                <span role="img" aria-label="donut">&#10060; </span>
            </div>

        </div>
    );
};




const mapDispatchToProps = dispatch => ({
    clearItem: (item) => dispatch(removeItemFromCartItemsArrayActionFunction(item)),

    addItem: item => dispatch(addToCartItemsActionFunction(item)),

    deleteQuantity: item => dispatch(deleteItemQuantityCartItemsArrayActionFunction(item))
});



export default connect(null, mapDispatchToProps)(CheckoutItem);