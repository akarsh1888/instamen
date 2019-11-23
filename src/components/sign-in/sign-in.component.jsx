import React, { Component } from "react";
// Styles
import './sign-in.styles.scss';

// Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//Signinwithgoogle function from firebase utils
import { auth, signInWithGoogle  } from "../../firebase/firebase.utils";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

    
    
    
    
    
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try
    {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    }
    catch (error)
    {
      console.log(error);
    }

     };

  
  
  
  
  
  
  
    
    handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  
    
    
    
    
    
    
    render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />

          <div className='button'>
          
          <CustomButton type="submit"> Sign in </CustomButton>

          {/* SignInWith Google button*/}
          <CustomButton onClick={signInWithGoogle} googleSignInColorProp>
            {" "}
            Sign in With Google{" "}
          </CustomButton>
  
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;
