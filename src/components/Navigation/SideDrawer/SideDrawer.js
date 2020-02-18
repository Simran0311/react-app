import React from 'react';

//import Logo from '../../Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
// import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux2 from '../../../hoc/Aux2/Aux2';
import NavigationItemsSection from '../NavigationItemsSection/NavigationItemsSection';
import NavigationSidedraw from '../NavigationSidedraw/NavigationSidedraw'


const sideDrawer = ( props ) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux2>
            {/* <Backdrop show={props.open} clicked={props.closed}/> */}
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    {/* <Logo /> */}
                </div>
                <nav>
                    <NavigationSidedraw />
                 

                </nav>

                {/* <nav>
                    <NavigationItems />
                </nav> */}

                <nav>
                    <NavigationItemsSection />
                </nav>

            </div>
        </Aux2>
    );
};

export default sideDrawer;