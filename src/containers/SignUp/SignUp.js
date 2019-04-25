import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import classes from './SignUp.css';
import * as actions from '../../store/actions/index';


class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }
    
    onSubmitSignUp = (e) => {
        e.preventDefault();

        const formData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            isSignup: true
        }

        this.props.onAuth(formData);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);  
      }
    render() {
        let errorMessage = null;

        if(this.props.error) {
            errorMessage = (
                <p className="error"> {this.props.error}</p>
            );
        }
        return (
            <div className={classes.SignUp}>
                <div>
                    <h3>Sign Up</h3>
                    {errorMessage}
                    <form onSubmit={this.onSubmitSignUp}>
                        <input type="text" name="name" placeholder="name" onChange={this.onChange}  />
                        <input type="email" name="email" placeholder="email" onChange={this.onChange} />
                        <input type="password" name="password" placeholder="password" onChange={this.onChange} />
                        <button type="submit">Submit</button>
                    </form>
                    <Link to="/login"><span style={{color:"white"}}>Login</span></Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);