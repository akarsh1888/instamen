import React from "react";
// Styles
import "./custom-button.styles.scss";

//import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, googlesign, addtocart, ...otherProps }) => (
  <button
    className={`custom-button
    ${addtocart ? "inverted" : ""} 
    ${googlesign ? "google-sign-in" : ""} `}
    {...otherProps}
  >
    {children}
  </button>
);

// const CustomButton = ({ children, ...otherProps }) => (
//     <CustomButtonContainer {...otherProps}>
//         {children}
//     </CustomButtonContainer>
//);

export default CustomButton;
