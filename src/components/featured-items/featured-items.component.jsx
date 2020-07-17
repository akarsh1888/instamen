import React, { Component } from 'react';

import { connect } from 'react-redux';
// eslint-disable-next-line
import { Link } from 'react-router-dom';

import './featured-items.styles.scss';

import {
  selectCollectionsAsArrayOfValuesSelector,
  selectIsLoadingSelector
} from "../../redux/shop/shop.selectors";

import CollectionItem from "../collection-item/collection-item.component";


class FeaturedItems extends Component {
  constructor() {
    super();

    this.state = {
        featuredItems: [],
    };
  }

    
    
  fun2 = () => {
    let array = [];

    array = this.props.collections.map(item => {
      return item.items.find(oneitems => oneitems.featured === true);
    });

      console.log(array);
      array = array.filter((item, index) => index < 3);
      
    this.setState({featuredItems:array})
  };

    
    
    
    render() {
  
    
        return (
          <div className="feature">
            <h1 className="title">Featured Products</h1>

            <div className="feature-products">
            {  
            //  <>
              //   if(!this.props.isLoading){
                
                 this.state.featuredItems.map(item => (
                    <CollectionItem key={item.id} item={item} />
                  ))     
                //  }
            // </>

                }

            </div>
          </div>
        );
    }
    


    componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.isLoading !== prevProps.isLoading) {
      this.fun2();
  }
    }
    


}


const mapStateToProps = state => ({
  collections: selectCollectionsAsArrayOfValuesSelector(state),
  isLoading: selectIsLoadingSelector(state)
});


export default connect(mapStateToProps)(FeaturedItems);