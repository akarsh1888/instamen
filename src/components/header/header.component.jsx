import React from "react";

//Link Router Functionality
import { Link } from "react-router-dom";
//SVG LOGO
// eslint-disable-next-line
import { ReactComponent as Logo } from "../../assets/crown.svg";

// Styles
import "./header.styles.scss";

// Auth
import { auth } from "../../firebase/firebase.utils";

// Redux
import { connect } from "react-redux";

// Cart Icon
import CartIcon from "../cart-icon/cart-icon.component";

// Cart Dropdown
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

// Pass State to all selectors automatically
import { createStructuredSelector } from "reselect";

// CartHidden Selector
import { selectCartHiddenSelector } from "../../redux/cart/cart.selectors.js";

// CurrentUser Selector
import { selectCurrentUserSelector } from "../../redux/user/user.selectors";

// react-icons
import { FaAlignJustify } from "react-icons/fa";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: true,
    };
  }

  render() {
    const {
      currentUser,
      hidden,
      propforvh,
      showcase,
      title,
      subtitle,
      children,
    } = this.props;
    const t = this.state.toggle;

    return (
      <>
        <header className={`${propforvh ? "prop" : ""} ${t ? "" : "prop2"}`}>
          <div className="container">
            <nav id="main-nav">
              <Link to="/">
                <h1 className="brand">
                  <span>InstaShop</span>
                  <div></div>
                </h1>
              </Link>
              <ul>
                <li>
                  <button
                    onClick={() =>
                      this.setState({ toggle: !this.state.toggle })
                    }
                    className="header-toggle"
                  >
                    <FaAlignJustify className="nav-icon" />
                  </button>
                </li>
                {this.state.toggle ? (
                  <div>
                    <li>
                      <Link className="Current Link" to="/">
                        HOME
                      </Link>
                    </li>
                    <li>
                      <Link className="Link" to="/shop">
                        SHOP
                      </Link>
                    </li>
                    <li>
                      <Link className="Link" to="/">
                        ABOUT
                      </Link>
                    </li>
                    {currentUser ? (
                      <li>
                        <Link className="Link" onClick={() => auth.signOut()}>
                          {" "}
                          SIGN OUT
                        </Link>{" "}
                      </li>
                    ) : (
                      <li>
                        <Link className="Link" to="/signin">
                          SIGN IN
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link className="Link" to="/">
                        CONTACT
                      </Link>
                    </li>
                    <li className="carticon">
                      <CartIcon />
                    </li>
                  </div>
                ) : (
                  <div></div>
                )}
                <div>{hidden ? null : <CartDropDown />}</div>
              </ul>
            </nav>
          </div>
          <div className="showcase-content">
            <h1 className="largeHeading">Online Fashion Store</h1>
            <div></div>
            <Link className="btn" to="/">
              <h1>SHOP NOW</h1>
            </Link>
          </div>
        </header>
        <div className={showcase}>
          <div className="banner">
            <h1>{title}</h1>
            <div />
            <p>{subtitle}</p>
            {children}
          </div>
        </div>
      </>
    );
  }
}

/* 

// 
// const mapStateToProps = state => ({
//       currentUser: state.user.currentUser,
//       hidden: state.cart.hidden
// });

// --------New way of accessing central store state,ie. writing & destructuring at the same time
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//       currentUser,
//       hidden
// });

// -------But now we shouldn't access the state directly but access it using the selectors for memoziation

// const mapStateToProps = (state) => ({
//       currentUser: selectCurrentUserSelector(state),
//     hidden: selectCartHiddenSelector(state)
// });

*/

//----why createStructuredSelector ? it automatically passes the state to each selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserSelector,
  hidden: selectCartHiddenSelector,
});

export default connect(mapStateToProps)(Header);
