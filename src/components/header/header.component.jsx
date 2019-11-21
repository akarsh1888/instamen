import React from 'react';

//Link Router Functionality
import { Link } from "react-router-dom";

//SVG LOGO
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Styles
import './header.styles.scss';

// Auth
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    return (
            
        <nav id='main-nav' >
               
                    <Link to="/">
                        <Logo className="logo" />
                    </Link>

                    <ul>
                        <li><Link className='Current Link' to="/">HOME</Link></li>
                        <li><Link className='Link'  to="/shop">SHOP</Link></li>
                        <li><Link className='Link' to="/">ABOUT</Link></li>
                        {
                        currentUser ?
                        <li><Link className='Link' onClick={() => auth.signOut()}> SIGN OUT</Link> </li>
                            :
                        <li><Link className='Link' to='/signin'>SIGN IN</Link></li>
                        }

                        <li><Link className='Link' to="/">CONTACT</Link></li>
                    </ul>
          
                </nav>
            



    );
};

export default Header;