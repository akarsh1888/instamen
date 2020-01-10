import React from "react";
// Routing
import { Switch, Route, Redirect } from "react-router-dom";

// Styling
import "./App.css";

// COMPONENTS
import HomePage from "./pages/homepage/homepage.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Footer from "./components/footer/footer.component";
import Header from './components/header/header.component';
import Showcase from './components/showcase/showcase.component';
//import ShopPage from "./pages/shop/shop.component";
import ShopPage2 from "./pages/shop2/shop2.component";


//getting firebase [auth] Function from firebase utils
import { auth } from "./firebase/firebase.utils";


//getting user/checking/creating in db functionality  
import { checkingOrCreatingUserDataInDb } from './firebase/firebase.utils';

// for one time usage, function for storing shopdata into firebase nosql db
//import { addCollectionAndDocuments }  from "./firebase/firebase.utils";

//redux
import { connect } from 'react-redux';

// user-reducer action object
import { setCurrentUser } from "./redux/user/user.actions";

// structured selector
import { createStructuredSelector} from "reselect";

// CurrentUser Selector
import { selectCurrentUserSelector } from "./redux/user/user.selectors";

// CollectionAsArray Selector
import { selectCollectionsAsArrayOfValuesSelector } from "./redux/shop/shop.selectors";

// CheckoutPage
import CheckoutPage from "./pages/checkout/checkout.component";




class App extends React.Component {
 

  unsubscribeFromAuth= null;


  




  componentDidMount() {

    const { setCurrentUserActionFunction } = this.props;

    // OAuth Persistent State gets called & gets [userAuth] object from firebase,
    // set the currentUser value to that
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       

      // (checkingOrCreatingUserDataInDb) function is fired here
      // when we signout===[userAuth] object will be null 

      if (userAuth)
      {
        const userRef = await checkingOrCreatingUserDataInDb(userAuth);

        // Now we also want userinfo in our app ,
        //To set user data as, it should also be in there in our app
         userRef.onSnapshot(snapShot => {
           setCurrentUserActionFunction({ id: snapShot.id, ...snapShot.data() },
             () => { console.log(this.state); });
          });
      }

      else
      {
        //equivalent as setting to null
        setCurrentUserActionFunction(userAuth);
      }

      //-----calling this function one time which will store our shop data in firebase nosql db without manually
      // addCollectionAndDocuments('collection', collectionsAsArray.map( 
      // ({ title, items }) => ({ title, items })  ));

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

          <Route path="/shop" component={ShopPage2} />

          {/* if currentUser is null, then render [component] otherwise redirect*/} 
          <Route exact path="/signin" render={ () => this.props.currentUser ?
            (<Redirect to='/' />) : (<SignInSignUpPage />)} />

          <Route path="/checkout" component={CheckoutPage} />
                     
        </Switch>

        <Footer />
        
      </div>
    );
  }




}











const mapDispatchToProps = dispatch => ({
  setCurrentUserActionFunction: user => dispatch(setCurrentUser(user))
});



// const mapStateToProps = rootreducerstate => ({
//   currentUser: rootreducerstate.user.currentUser
// });


//------Now we r accessing [currentuser] state value indirectly using selectors

// const mapStateToProps = rootreducerstate => ({
//   currentUser: selectCurrentUserSelector(rootreducerstate)
// });

// here why [createStructuredSelector] ? , it passess state to all selectors automaticallly
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUserSelector,
  collectionsAsArray: selectCollectionsAsArrayOfValuesSelector
});




export default connect(mapStateToProps, mapDispatchToProps)(App);
