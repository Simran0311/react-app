import React from 'react';


import classes from './DrawerToggle.module.css';
import Hamburger from '../HamMenu/hamburger';


const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div>
            <Hamburger />

        </div>
    </div>

);

export default drawerToggle;

