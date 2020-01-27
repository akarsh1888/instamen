import React from 'react';
import './category-overview.styles.scss';

import { connect } from 'react-redux';

import { Link } from "react-router-dom";
import CollectionPreview from "../collection-preview/collection-preview.component";

// selectShopCollectionsSelector
import { selectShopCollectionsSelector } from '../../redux/shop/shop.selectors';

import Header from "../header/header.component";









const CategoryOverview = ({ collections }) => {

    const values = collections ? Object.values(collections) : null ;
    
    return (
        <div>
            <Header showcase='categoryoverviewshowcase'
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299"
            > 
            <Link to="/" className="btn">
             our rooms
            </Link>
            </Header>


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