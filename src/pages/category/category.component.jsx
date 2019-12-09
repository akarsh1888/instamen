import React from 'react';
import './category.styles.scss';

import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectParticularCollectionSelector } from '../../redux/shop/shop.selectors';


const CategoryPage = ({ particularCollection}) => {

    const { title, items } = particularCollection;
    return (
        <div className='category-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    particularCollection: selectParticularCollectionSelector(ownProps.match.params.collectionId)(state)
});




export default connect(mapStateToProps)(CategoryPage);