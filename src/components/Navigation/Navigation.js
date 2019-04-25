import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes  from './Navigation.css';
import NavigationItems from './NavigationItems/NavigationItems';

class Navigation extends Component {
    render() {
        return (
            <div className={classes.Navigation}>
                <header className={classes.Navigation}>
                    <div className={classes.Logo}>
                    <h3 style={{color:"white"}}> Apps2Fusion</h3>
                    </div>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems 
                            emailName={this.props.email} 
                            isAuthenticated={this.props.isAuthenticated} />
                    </nav>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        email: state.auth.email
    };
};

export default connect(mapStateToProps)(Navigation);