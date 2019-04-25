import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItems.css';


const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavLink to="/"><h5 className={classes.Table} style={{color:"white"}}>Home</h5></NavLink>
        <NavLink to="/tables"><h5 className={classes.Table} style={{color:"white"}}>Tables</h5></NavLink>
        {!props.isAuthenticated 
            ? <NavLink to="/login"><span style={{color:"white"}}>Login</span></NavLink>
            : <NavLink to="/logout"><span style={{color:"white"}}>{props.emailName}/Logout</span></NavLink>}
    </ul>
);

export default navigationItems;
