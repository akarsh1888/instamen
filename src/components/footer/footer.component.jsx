import React from 'react';

//Link Router Functionality
import { Link } from "react-router-dom";

// Styles
import './footer.styles.scss';

//SVG LOGO
import { ReactComponent as Logo } from "../../assets/crown.svg";


const Footer = () => {
    return (
      <footer className="main-footer py-2">
            <div className="container footer-container">
                
          <div>
            <Link to="/">
              <Logo className="logo" />
            </Link>
            <p>Lorem, ipsum dolor sit amet consectetur adipis earum vitae.</p>
          </div>

          <div>
            <h3>Email Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form>
              <input type="email" />
              <input type="submit" value="Subscribe" className="btn btn-primary"  />
            </form>
          </div>

          <div>
            <h3 className="ulheading">Site Links</h3>
            <ul className="ullist">
              <li><Link className="Link" to="/">Help & Support</Link></li>
              <li><Link className="Link" to="/">Privacy Policy</Link></li>
              <li><Link className="Link" to="/">About Us</Link></li>
              <li><Link className="Link" to="/">Contact</Link></li>
            </ul>
         </div>
                


          <div>
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi,nesciunt!
            </p>
            <Link className="Link btn btn-secondary" to="/">Join Now</Link>
          </div>

          <div className='last-child'>
            <p>Copyright &copy; 2019, All Rights Reserved</p>
          </div>
                
        </div>
      </footer>
    );
};

export default Footer;