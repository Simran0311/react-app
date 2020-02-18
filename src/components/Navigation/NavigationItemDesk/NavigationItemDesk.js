import React from 'react';

import classes from './NavigationItemDesk.module.css';

const navigationItemdesk = ( props ) => (
    <li className={classes.NavigationItemdesk}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}>{props.children}</a>
    </li>
);

export default navigationItemdesk;