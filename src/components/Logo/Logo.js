import React from 'react';
import { Route, Link } from 'react-router-dom';

import Logo from '../../assets/images/blue_hk.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
    <Link to="/">
        <img src={Logo} alt="HomeKnock" />
    </Link>

    <Route path="/" />
    </div>
);

export default logo;