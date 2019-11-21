import React from 'react';
// Styles
import './showcase.styles.scss';

//Link Router Functionality
import { Link } from "react-router-dom";

//import Header2 from '../header2/header2.component';



const Showcase = ({currentUser}) => {
    return (
        <header id="header-home">
            
             
            
            {/*<Header2 />*/}

            
            <div className='header-content '>

                <h1> I Am John The<span class="txt-type" data-wait="3000"
                    data-words='["Photographer", "Designer", "UI/UX Dev"]'> </span>
                </h1>

                <p>
                    I specialize in graphic design, UI/UX and photography
                    </p>

                <Link className='my-2 btn btn-secondary' to="/" >View My Work</Link>

            </div>
        </header>
            
    );
};

export default Showcase;