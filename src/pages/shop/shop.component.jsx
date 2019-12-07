import React from "react";

// shop data
// import SHOP_DATA from "./shop.data";

// Components
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// connect
import { connect } from "react-redux";

// selectShopCollectionsSelector
import { selectShopCollectionsSelector } from "../../redux/shop/shop.selectors";


const ShopPage =({collections}) => (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );


const mapStateToProps = state => ({
  collections: selectShopCollectionsSelector(state)
});


export default connect(mapStateToProps)(ShopPage);
