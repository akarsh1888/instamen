import React from 'react';

import CategoryOverview from "../../components/category-overview/category-overview.component";
import CategoryPage from '../../pages/category/category.component'

import { Route } from 'react-router-dom';

import { firestore, fetchConvertFirebaseShopDataIntoSingleObjectPattern } from "../../firebase/firebase.utils";

import { connect } from "react-redux";

import { shopDataFromFirebaseToReducerAction} from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spinner/with-spinner.styles';


const CategoryPageWithSpinner = WithSpinner(CategoryPage);
//const CategoryOverviewWithSpinner = WithSpinner(CategoryOverview);



class ShopPage2 extends React.Component {



    state = {
        loading: true
    };










    unsubscribeFromSnapshot = null;

   componentDidMount()  {
    
// get collectionreference object
const collectionRefObject = firestore.collection('collection');
    
const { shopDataFromFirebaseToReducerAction } = this.props;
    
    
// below functn will receive [collctnSnapshot object] ..with [docs] array of docmnt snapshot objects
//of all docmnts inside a collection
this.unsubscribeFromSnapshot = collectionRefObject.onSnapshot(async collectionSnapshotObj => {
const singleObjectCollection = await fetchConvertFirebaseShopDataIntoSingleObjectPattern(collectionSnapshotObj);
        
    
// dispatching converted collection into the reducer
    shopDataFromFirebaseToReducerAction(singleObjectCollection);
        
//after only reducer is filled with data from firebase, then only we will show components
        this.setState({ loading: false });
});
        
        

}//compnt did mount end






    
    
    

    



render() {

    const { match } = this.props;


        return (
            <div className='shop-page'>
                
                {
// since [shop2] component route is defined in app.js, it gets the [match] object
                
//render method takes a functions which takes [props] for the component in the parameter,to be used by cmpnt
// here we have to pass [match,location] object for the [categorypage] component to fetch from url
                }

                <Route path={`${match.path}/:collectionId`} render={ props => (
                    <CategoryPageWithSpinner isLoading={this.state.loading} {...props} />)
                } /> 
                
                <Route exact path={`${match.path}`} render={props => this.state.loading ?
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
    
shopDataFromFirebaseToReducerAction: (singleObjectCollection) => {
        
    dispatch(shopDataFromFirebaseToReducerAction(singleObjectCollection))
    }


});




export default connect(null, mapDispatchToProps)(ShopPage2);