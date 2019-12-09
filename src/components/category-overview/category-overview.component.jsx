import React from 'react';
import './category-overview.styles.scss';

import { connect } from 'react-redux';

import CollectionPreview from "../collection-preview/collection-preview.component";

// selectShopCollectionsSelector
import { selectShopCollectionsSelector } from '../../redux/shop/shop.selectors';



const CategoryOverview = ({ collections }) => {

    const values = Object.values(collections);
    
    return (
            <div className="category-overview">
                {values.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
            </div>
    );
};


const mapStateToProps = state => ({
    collections: selectShopCollectionsSelector(state)
});


export default connect(mapStateToProps)(CategoryOverview);