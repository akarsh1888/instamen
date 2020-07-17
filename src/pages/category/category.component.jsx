import React from 'react';
import './category.styles.scss';

import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import ProductPage from "../../components/product-page/product-page.component";

import { selectParticularCollectionSelector } from '../../redux/shop/shop.selectors';

import Header from "../../components/header/header.component";

 // eslint-disable-next-line
import { SpinnerContainer, SpinnerOverlay } from '../../components/with-spinner/with-spinner.styles';

import { Route } from "react-router-dom";



const CategoryPage = ({ particularCollection, match }) => {
 
   //const { title, items } = particularCollection

  // if (particularCollection) {
     
       return (
         <div>
           
            <Route exact path={`${match.path}`} render={ props => (
            <div>
             <Header />
           <div className="category-page">
             <h2 className="title">{particularCollection.title}</h2>

             <div className="items">
               {particularCollection.items.map(item => (
                 <CollectionItem key={item.id} item={item} />
               ))}
             </div>
               </div>
           </div> )
                   } />
   
   
            <Route path={`${match.path}/:product`} render={ props => (<ProductPage {...props} />) } />
         </div>
       );

  //  }
    // else {
    //    return (<div>
    //     <SpinnerOverlay>
    //        <SpinnerContainer />
    //        <h2>Wait! Loading Things For You</h2>
    //     </SpinnerOverlay>
    //     </div>
    //    );
    //     }

};






// based on the match object, it takes the data from url and fetches from the root reducer state
const mapStateToProps = (state, ownProps) => ({
  particularCollection: selectParticularCollectionSelector(ownProps.match.params.collectionId)(state)
    
});




export default connect(mapStateToProps)(CategoryPage);