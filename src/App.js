import React from "react";
// Routing
import { Switch, Route } from "react-router-dom";

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


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }











  unsubscribeFromAuth= null;

  
  componentDidMount() {

    // OAuth Persistent State gets called & gets [userAuth] object from firebase, set the currentUser value
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       

      // (createUserProfileDocument) function is fired here
      // when we signout===[userAuth] object will be null 

      if (userAuth)
      {
        const userRef = await checkingOrCreatingUserDataInDb(userAuth);

        // Now we also want userinfo in our app ,
        //To set user data as, it should also be in there in our app
         userRef.onSnapshot(snapShot => {
     this.setState({ currentUser: { id: snapShot.id, ...snapShot.data() } }, () => {console.log(this.state);}  );
          });
      }

      else
      {
        //equivalent as setting to null
        this.setState({ currentUser: userAuth });
      }

    });


  }




  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



















  render() {
    return (
      <div>
        
        
  
        <Header currentUser={this.state.currentUser} />


        <Route exact path="/" component={Showcase} />
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUpPage} />
        </Switch>

        <Footer />
        
      </div>
    );
  }
}

export default App;
