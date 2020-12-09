import React from "react";

//Custom Button Component
import CustomButton from "../custom-button/custom-button.component";

//Styles
import "./cart-dropdown.styles.scss";

// Connect to Redux Central Store
import { connect } from "react-redux";

// WithRouter to communicate from url
import { withRouter } from "react-router-dom";

// CartItemsindropdown
import CartItemsDropDown from "../cart-items-dropdown/cart-items-dropdown.component";

// CartItemsArraySelector
import { selectCartItemsArraySelector } from "../../redux/cart/cart.selectors";

// toggleCartHiddenActionFunction
import { toggleCartHiddenActionFunction } from "../../redux/cart/cart.actions";

const CartDropDown = ({
  cartItemsArrayFromCentralStore,
  history,
  toggleCartHiddenActionFunction,
}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        // based on array length we will show message or the items inside it
        cartItemsArrayFromCentralStore.length ? (
          cartItemsArrayFromCentralStore.map((oneCartItem) => (
            <CartItemsDropDown key={oneCartItem.id} oneCartItem={oneCartItem} />
          ))
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )
      }
    </div>

    <CustomButton
      onClick={() => {
        history.push("/checkout");
        toggleCartHiddenActionFunction();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  // ----Earlier accessing (cartItemsArray) directly without selectors from central store
  // cartItemsArrayFromCentralStore: state.cart.cartItemsArray

  cartItemsArrayFromCentralStore: selectCartItemsArraySelector(state),
});

// Changing [hidden] from central state value
const mapDispatchToProps = {
  toggleCartHiddenActionFunction,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
