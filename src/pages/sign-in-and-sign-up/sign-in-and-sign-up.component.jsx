import React from "react";

// Styles
import "./sign-in-and-sign-up.styles.scss";

// Components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import Header from "../../components/header/header.component";

const SignInAndSignUpPage = () => (
    <div>
    <Header/>
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
    </div>
    </div>
);

export default SignInAndSignUpPage;
