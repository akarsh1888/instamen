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
      
      <div className='img-container'>
        <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
        
        <div className="price-top">
            <h6>${price}</h6>
            <p>per piece</p>
        </div>
              
        <CustomButton className="btn item-link"
        onClick={() => addToCartItemsFunction(item)} propcolorforaddtocart>
        ADD TO CART
        </CustomButton>
      </div>
      
        <div className="collection-footer">
        <span className="name">{name}</span>
        </div>
    </div>
  );
};





const mapDispatchToProps = dispatch => ({
  addToCartItemsFunction: item => dispatch(addToCartItemsActionFunction(item))
});





export default connect(null, mapDispatchToProps)(CollectionItem);
