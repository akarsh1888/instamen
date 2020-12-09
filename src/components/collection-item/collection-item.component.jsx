import React from "react";

// Styles
import "./collection-item.styles.scss";

// CustomButton
import CustomButton from "../custom-button/custom-button.component";

// Redux Central Store
import { connect } from "react-redux";

// cart-reducer action function
import { addToCartItemsActionFunction } from "../../redux/cart/cart.actions";

// eslint-disable-next-line
import { Redirect } from "react-router-dom";

import { withRouter } from "react-router-dom";

const CollectionItem = ({ item, addToCartItemsFunction, history, match }) => {
  const { name, price, imageUrl, category } = item;

  return (
    <div className="collection-item">
      <div className="img-container">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="price-top">
          <h6>${price}</h6>
          <p>per piece</p>
        </div>

        <CustomButton
          onClick={() => addToCartItemsFunction(item)}
          addtocart={true}
        >
          ADD TO CART
        </CustomButton>

        <button
          className="know-more"
          onClick={() => history.push(`/shop/${category}/${name}`)}
        >
          <span>KNOW MORE</span>
        </button>
      </div>

      <div className="collection-footer">
        <span className="name">{name}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCartItemsFunction: (item) =>
    dispatch(addToCartItemsActionFunction(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
