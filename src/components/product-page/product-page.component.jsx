import React from 'react';

import './product-page.styles.scss';

import { connect } from "react-redux";

import { selectParticularProductSelector } from '../../redux/shop/shop.selectors';

const ProductPage = ({match,selectParticularProduct}) => {

  console.log(selectParticularProduct);
  
    return (
      <div>
        <h2>{match.params.product}</h2>
        <h3>{match.params.collectionId}</h3>
        Product Page
      </div>
    );


};

const mapStateToProps = (state, ownProps) => ({
  selectParticularProduct: selectParticularProductSelector(
    ownProps.match.params.collectionId,
    ownProps.match.params.product
  )(state)
});



export default connect(mapStateToProps)(ProductPage);