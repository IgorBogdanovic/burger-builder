import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

import classes from './Layout.scss';

const layout = (props) => (
    <React.Fragment>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            { props.children }
        </main>
    </React.Fragment>
);

export default layout;
