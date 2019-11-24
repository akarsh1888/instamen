import React from 'react';

// Styles
import './custom-button.styles.scss';

const CustomButton = ({ children, googleSignInColorProp, propcolorforaddtocart, ...otherProps }) => (
    <button className={`
    ${propcolorforaddtocart ? 'inverted' : ''} 
    ${googleSignInColorProp ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;