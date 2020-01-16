import React from 'react';
import './category-overview.styles.scss';

import { connect } from 'react-redux';

import CollectionPreview from "../collection-preview/collection-preview.component";

// selectShopCollectionsSelector
import { selectShopCollectionsSelector } from '../../redux/shop/shop.selectors';

import Header from "../header/header.component";









const CategoryOverview = ({ collections }) => {

    const values = collections ? Object.values(collections) : null ;
    
    return (
        <div>
        <Header/>
        <div className="category-overview">
        {
            values ? values.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
                )) :
                null
        }
            </div>
        </div>
        );
 };
        
        
        
        
        
        
        
        
        
        
        const mapStateToProps = state => ({
    collections: selectShopCollectionsSelector(state)
});


export default connect(mapStateToProps)(CategoryOverview);