import React from 'react';

import CategoryOverview from "../../components/category-overview/category-overview.component";
import CategoryPage from '../../pages/category/category.component'

import { Route } from 'react-router-dom';


const ShopPage2 = ({ match }) => {
    return (
        <div className='shop-page'>
            
            <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
            <Route exact path={`${match.path}`} component={CategoryOverview} />
            
        </div>
    );
};

export default ShopPage2;