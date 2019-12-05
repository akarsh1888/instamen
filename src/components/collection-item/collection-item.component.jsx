import React from "react";

// Styles
import "./collection-item.styles.scss";

// CustomButton
import CustomButton from "../custom-button/custom-button.component";

// Redux Central Store
import { connect } from 'react-redux';

// cart-reducer action function
import { addToCartItemsActionFunction } from "../../redux/cart/cart.actions"; 

const CollectionItem = ({ item, addToCartItemsFunction }) => {
   
  const { name, price, imageUrl } = item;
  
  return (
    <div className="collection-item">
      
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton onClick={() => addToCartItemsFunction(item)} propcolorforaddtocart>
        ADD TO CART
      </CustomButton>
      
    </div>
  );
};



const mapDispatchToProps = dispatch => ({
  addToCartItemsFunction: item => dispatch(addToCartItemsActionFunction(item))
});



export default connect(null, mapDispatchToProps)(CollectionItem);
