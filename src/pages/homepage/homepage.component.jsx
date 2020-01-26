import React from "react";

// Styles
import "./homepage.component.styles.scss";

// CSS in JS
import { HomePageStyledContainer } from "./homepage.styled";

import DirectoryMenu from '../../components/directory-menu/directory-menu.component' ;

import Header from "../../components/header/header.component";

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <Header
        propforvh={true}
        showcase="homepageshowcase"
        title="luxurious rooms"
        subtitle="deluxe rooms starting at $299"
      >
          <Link to="/" className="btn">
            our rooms
          </Link>
      </Header>

      <HomePageStyledContainer>
        <DirectoryMenu />
      </HomePageStyledContainer>
    </div>
  );
};

export default HomePage;
