import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        {/* Makes the selection shown on the toolbar */}
        {/* <NavigationItem link="/" active>LIST WITH US</NavigationItem> */}
        <NavigationItem link="/list-with-us">LIST WITH US</NavigationItem>
        <NavigationItem link="/signup">SIGN UP</NavigationItem>
        <NavigationItem link="/login">LOG IN</NavigationItem>

    </ul>
);

export default navigationItems;