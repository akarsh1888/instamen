import React from "react";

// shop data
// import SHOP_DATA from "./shop.data";

// Components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// connect
import { connect } from "react-redux";

// selectShopCollectionsSelector
import { selectShopCollectionsSelector } from "../../redux/shop/shop.selectors";







const ShopPage = ({ collections }) => {
  // converting objects of objects into array of values

  const values = collections ? Object.values(collections) : null;

  return (
    <div className="shop-page">
      
      {values ? values.map(({ id, ...otherCollectionProps }) => (

        <CollectionPreview key={id} {...otherCollectionProps} />
        
      )) : null
    }
      
    </div>
  )
};   


    //  Earlier when collections was an array of objects

      // {collections.map(({ id, ...otherCollectionProps }) => (
      //   <CollectionPreview key={id} {...otherCollectionProps} />
      // ))}


    
const mapStateToProps = state => ({
  collections: selectShopCollectionsSelector(state)
});


export default connect(mapStateToProps)(ShopPage);
