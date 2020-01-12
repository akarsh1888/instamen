import React from 'react';

import { fetchShopDataFromFirebaseAsyncAction } from "../../redux/shop/shop.actions";

import { selectIsLoadingSelector } from "../../redux/shop/shop.selectors";

import CategoryOverview from "../../components/category-overview/category-overview.component";
import CategoryPage from '../../pages/category/category.component'

import { Route } from 'react-router-dom';


import { connect } from "react-redux";


import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spinner/with-spinner.styles';


const CategoryPageWithSpinner = WithSpinner(CategoryPage);
//const CategoryOverviewWithSpinner = WithSpinner(CategoryOverview);




class ShopPage2 extends React.Component {





    componentDidMount() {
       
    this.props.fetchShopDataFromFirebaseAsyncAction();
       
}






    
    
    

    



render() {

    const { match, loading } = this.props;


        return (
            <div className='shop-page'>
                
                {
// since [shop2] component route is defined in app.js, it gets the [match] object
                
//render method takes a functions which takes [props] for the component in the parameter,to be used by cmpnt
// here we have to pass [match,location] object for the [categorypage] component to fetch from url
                }

                <Route path={`${match.path}/:collectionId`} render={ props => (
                    <CategoryPageWithSpinner isLoading={loading} {...props} />)
                } /> 
                
                <Route exact path={`${match.path}`} render={() => loading ?
                    (<SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay>):
                    (<CategoryOverview/>)
                } />
                
            </div>
        )
    
    
};

    
    
    
    
//class end  
}



















const mapDispatchToProps = (dispatch) => ({
    fetchShopDataFromFirebaseAsyncAction: () => dispatch(fetchShopDataFromFirebaseAsyncAction())
});



const mapStateToProps = (state) => ({
    loading: selectIsLoadingSelector(state)
})



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage2);