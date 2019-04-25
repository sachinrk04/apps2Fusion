import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from "./LogIn.css";
import * as actions from '../../store/actions/index';

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
         email:"",
         password:"",
     }
    }

    loginSubmit = (e) => {
        e.preventDefault();
 
        const formData = {
             email: this.state.email,
             password: this.state.password,
             isSignup: false
         }
 
         this.props.onAuth(formData);
   }

    onChangeLogin = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);  
      }

    render() {
        let errorMessage = null;

        if(this.props.error) {
            errorMessage = (
                <p className="error"> {this.props.error}</p>
            );
        }
        return (
            <div className={classes.LogIn}>
                <div>
                    <h3>Login</h3>
                    {errorMessage}
                    <form onSubmit={this.loginSubmit}>
                        <input type="email" name="email" placeholder="email" onChange={this.onChangeLogin} />
                        <input type="password" name="password" placeholder="password" onChange={this.onChangeLogin} />
                        <button type="submit">Submit</button>
                    </form>
                    <Link to="/signup"><span style={{color:"white"}}>Sign Up</span></Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      loading: state.auth.loading,
      error: state.auth.error,
      isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
return {
    onAuth: (data) => dispatch(actions.auth(data)),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);