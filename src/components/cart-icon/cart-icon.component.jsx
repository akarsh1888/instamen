import React from 'react';

//Styles
import './cart-icon.styles.scss';

// Shooping Bag logo
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// connect react to redux central state
import { connect } from 'react-redux';

// cart-reducer action function
import { toggleCartHiddenActionFunction } from '../../redux/cart/cart.actions';

// accessing state/subscribing with the help of selectors
import { selectCartItemsQuantityCount } from "../../redux/cart/cart.selectors";






const CartIcon = ({ toggleCartHiddenActionFunction, quantityCountSelector }) => (

    <div className='cart-icon' onClick={toggleCartHiddenActionFunction}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{quantityCountSelector}</span>
    </div>

);










// Changing [hidden] from central state value
 const mapDispatchToProps = (dispatch) => ({
     toggleCartHiddenActionFunction: () => dispatch(toggleCartHiddenActionFunction())
 });





const mapStateToProps = state => ({

  // ---Before without selectors-accessing (cartItemsArray) directly without selectors from central store---
  // quantityCount: state.cart.cartItemsArray.reduce((accumalatedQuantity, cartItem) =>
  //     accumalatedQuantity + cartItem.quantity, 0)

  quantityCountSelector: selectCartItemsQuantityCount(state)
});









export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);