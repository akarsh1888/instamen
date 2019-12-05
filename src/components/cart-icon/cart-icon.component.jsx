import React from 'react';

//Styles
import './cart-icon.styles.scss';

// Logo
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// redux central state
import { connect } from 'react-redux';

// cart-reducer action function
import { toggleCartHiddenActionFunction } from '../../redux/cart/cart.actions';

// accessing state/subscribing with the help of selectors
import { selectCartItemsQuantityCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, quantityCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{quantityCount}</span>
    </div>
);




// Changing [hidden] from central state value
 const mapDispatchToProps = dispatch => ({
     toggleCartHidden: () => dispatch(toggleCartHiddenActionFunction())
 });









//  Calculating total quantity by using all objects onebyone from central store ie.cartItemsArray
const mapStateToProps = state => ({

  // ---Before without selectors-accessing (cartItemsArray) directly without selectors from central store---
  // quantityCount: state.cart.cartItemsArray.reduce((accumalatedQuantity, cartItem) =>
  //     accumalatedQuantity + cartItem.quantity, 0)

  quantityCount: selectCartItemsQuantityCount(state)
});




export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);