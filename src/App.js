import React from "react";
// Routing
import { Switch, Route, Redirect } from "react-router-dom";

// Styling
import "./App.css";

// COMPONENTS
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Footer from "./components/footer/footer.component";
import Header from './components/header/header.component';
import Showcase from './components/showcase/showcase.component';


//getting firebase [auth] Function from firebase utils
import { auth } from "./firebase/firebase.utils";

//getting user/checking/creating in db functionality  
import { checkingOrCreatingUserDataInDb } from './firebase/firebase.utils';

//redux
import { connect } from 'react-redux';

// user-reducer action object
import { setCurrentUser } from "./redux/user/user.actions";

// structured selector
import { createStructuredSelector} from "reselect";

// CurrentUser Selector
import { selectCurrentUserSelector } from "./redux/user/user.selectors";

class App extends React.Component {
 

  unsubscribeFromAuth= null;


  




  componentDidMount() {

    const { setCurrentUser } = this.props;

    // OAuth Persistent State gets called & gets [userAuth] object from firebase, set the currentUser value to that
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       

      // (checkingOrCreatingUserDataInDb) function is fired here
      // when we signout===[userAuth] object will be null 

      if (userAuth)
      {
        const userRef = await checkingOrCreatingUserDataInDb(userAuth);

        // Now we also want userinfo in our app ,
        //To set user data as, it should also be in there in our app
         userRef.onSnapshot(snapShot => {
         setCurrentUser({ id: snapShot.id, ...snapShot.data()  }, () => {console.log(this.state);});
          });
      }

      else
      {
        //equivalent as setting to null
        setCurrentUser(userAuth);
      }

    });


  }









  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        
        
  
        <Header />


        <Route exact path="/" component={Showcase} />
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />

          {/* if currentUser is null, then only render otherwise redirect*/} 
          <Route exact path="/signin" render={ () => this.props.currentUser ?
            (<Redirect to='/' />) : (<SignInSignUpPage />)  }/>
                     
        </Switch>

        <Footer />
        
      </div>
    );
  }
}





const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});



// const mapStateToProps = rootreducerstate => ({
//   currentUser: rootreducerstate.user.currentUser
// });


//------Now we r accessing [currentuser] state value indirectly using selectors

// const mapStateToProps = rootreducerstate => ({
//   currentUser: selectCurrentUserSelector(rootreducerstate)
// });

// here [createStructuredSelector] passess state to all selectors automaticallly
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserSelector
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
