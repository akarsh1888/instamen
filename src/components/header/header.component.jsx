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

// Pass State to all selectors automatically
import { createStructuredSelector } from "reselect";

// CartHidden Selector
import {selectCartHiddenSelector} from "../../redux/cart/cart.selectors.js"

// CurrentUser Selector
import { selectCurrentUserSelector } from '../../redux/user/user.selectors'
    
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

//--------New way of accessing central store state,ie. writing & destructuring at the same time
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });




// -------But now we shouldn't access the state directly but access it using the selectors for memoziation

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUserSelector(state),
//     hidden: selectCartHiddenSelector(state)
// });

//----why ? createStructuredSelector automatically passes the state to each selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUserSelector,
    hidden: selectCartHiddenSelector
});




export default connect(mapStateToProps)(Header) ;