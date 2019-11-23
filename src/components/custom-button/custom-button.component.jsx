import React from 'react';

// Styles
import './custom-button.styles.scss';

const CustomButton = ({ children, googleSignInColorProp, ...otherProps }) => (
    <button className={`${googleSignInColorProp ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;