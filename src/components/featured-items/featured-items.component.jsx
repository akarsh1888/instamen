import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import './featured-items.styles.scss';

import {
  selectCollectionsAsArrayOfValuesSelector,
  selectIsLoadingSelector
} from "../../redux/shop/shop.selectors";

// import CollectionItem from "../collection-item/collection-item.component";


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

      array = array.filter((item, index) => index < 3);
      
    this.setState({featuredItems:array})
  };

    
    
    
    render() {
    
        return (
          <div className='cont'>
                <h1 className="title">
                    Featured Products
                </h1>
                
                <div className='feature-products'>

                    {this.state.featuredItems.map(item => {

                        const { name, price, imageUrl } = item;
                        
                    return (
                    <article key={item.id} className="item">
                            
                      <div className="img-container">
                        <img src={imageUrl} alt="single product" />
                                
                        <div className="price-top">
                          <h6>${price}</h6>
                          <p>per piece</p>
                        </div>
                            
                        <Link to='/' className="btn item-link">
                          Know More
                        </Link>
                        <Link to='/' className="btn item-link2">
                          Add to Cart
                        </Link>
                      </div>
                            
                        <p className="item-info">{name}</p>
                    </article>
                          )
                })}
                    
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