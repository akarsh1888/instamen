import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  selectCollectionsAsArrayOfValuesSelector,
  selectIsLoadingSelector
} from "../../redux/shop/shop.selectors";

class FeaturedItems extends Component {

constructor(){
    super();

    this.state = {
        featuredItems: []
    };
       
};

    

    fun2=() =>{
        let array = [];
            
        array = this.props.collections.map(item => {
            return item.items.find(oneitems => oneitems.featured === true);
            })
            
        array = array.filter((item, index) => index < 3);
};
            

            
    render() {
    
        this.fun2();
        

        return (
            <div>
   
                <h1>Featured Component</h1>
            </div>
        );
    }
}


const mapStateToProps = state => ({
  collections: selectCollectionsAsArrayOfValuesSelector(state),
  isLoading: selectIsLoadingSelector(state)
});


export default connect(mapStateToProps)(FeaturedItems);