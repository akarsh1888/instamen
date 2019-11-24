import React from "react";

// Styles
import "./collection-item.styles.scss";

// CustomButton
import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}/>

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomButton propcolorforaddtocart> ADD TO CART</CustomButton>
      
    </div>
  );
};

export default CollectionItem;
