import React from 'react';

// Styles
import './custom-button.styles.scss';

//import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, googleSignInColorProp, propcolorforaddtocart, ...otherProps }) => (
    
    <button className={`
    ${propcolorforaddtocart ? 'inverted' : ''} 
    ${googleSignInColorProp ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

// const CustomButton = ({ children, ...otherProps }) => (

//     <CustomButtonContainer {...otherProps}>
//         {children}
//     </CustomButtonContainer>

//);




export default CustomButton;