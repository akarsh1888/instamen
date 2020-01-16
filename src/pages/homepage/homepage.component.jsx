import React from "react";

// Styles
import "./homepage.component.styles.scss";

// CSS in JS
import { HomePageStyledContainer } from "./homepage.styled";

import DirectoryMenu from '../../components/directory-menu/directory-menu.component' ;

import Header from "../../components/header/header.component";



const HomePage = () => {
  return (
    <div>
      <Header propforvh={100}/>
    <HomePageStyledContainer>
    <DirectoryMenu/>
    </HomePageStyledContainer>
    </div>
  );
};

export default HomePage;
