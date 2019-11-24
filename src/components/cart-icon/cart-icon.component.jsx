import React from 'react';

//Styles
import './cart-icon.styles.scss';

// Logo
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// redux central state
import { connect } from 'react-redux';

// cart-reducer action function
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);




// Changing hidden state value
 const mapDispatchToProps = dispatch => ({
     toggleCartHidden: () => dispatch(toggleCartHidden())
 });


export default connect(null, mapDispatchToProps)(CartIcon);