import React from 'react';

//Link Router Functionality
import { Link } from "react-router-dom";

//SVG LOGO
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Styles
import './header.styles.scss';

// Auth
import { auth } from '../../firebase/firebase.utils';

// Redux
import { connect } from 'react-redux'

// Cart Icon
import CartIcon from '../cart-icon/cart-icon.component';

// Cart Dropdown
import CartDropDown from "../cart-dropdown/cart-dropdown.component";


const Header = ({currentUser, hidden}) => {
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
                        
                        <li><CartIcon /></li> 
                        <li> { hidden ? null : <CartDropDown /> } </li>
                    </ul>
           
        </nav>

        
        
            



    );
};



// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
// });

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header) ;