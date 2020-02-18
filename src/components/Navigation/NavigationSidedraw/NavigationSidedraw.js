import React from 'react';

import classes from './NavigationSidedraw.module.css';
//import NavigationItemDesk from '../NavigationItemDesk/NavigationItemDesk';
import LineSplit from '../../UI/LineSplit/LineSplit';
import NavigationItem from '../NavigationItem/NavigationItem';


const NavigationSidedraw = () => (
    <ul className={classes.NavigationSidedraw}>
        
        <NavigationItem link="/list-with-us">LIST WITH US</NavigationItem>
        <NavigationItem link="/">SIGN UP</NavigationItem>
        <NavigationItem link="/">LOG IN</NavigationItem>
        
        <LineSplit />


    </ul>
);

export default NavigationSidedraw;