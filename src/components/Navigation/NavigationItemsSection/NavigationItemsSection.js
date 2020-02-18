import React from 'react';

import classes from './NavigationItemsSection.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
//import LineSplit from '../../UI/LineSplit/LineSplit';
import LineSplitDesk from '../../UI/LineSplit/LineSplit';
// import { Route, Link } from 'react-router-dom';
// import About from '../../../containers/Pages/About/about';

const NavigationItemsSection = () => (
    <ul className={classes.NavigationItemsSection}>
        {/* <LineSplit /> */}

        <NavigationItem link="/about">ABOUT US</NavigationItem>
        <NavigationItem link="/contact">CONTACT US</NavigationItem>
        

        {/* <li>
            <NavigationItem>
            <Link to="/about">About</Link>
            </NavigationItem>
            
            </li>

            
        <Route path="/about" component={About} /> */}



        <LineSplitDesk />
     
      
    </ul>  
  
);


export default NavigationItemsSection;

