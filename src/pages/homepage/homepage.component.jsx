import React from "react";

// Styles
import "./homepage.component.styles.scss";

// CSS in JS
import { HomePageStyledContainer } from "./homepage.styled";

import DirectoryMenu from '../../components/directory-menu/directory-menu.component' ;





const HomePage = () => {
  return (
    <HomePageStyledContainer>
      <DirectoryMenu/>
    </HomePageStyledContainer>
  );
};

export default HomePage;
