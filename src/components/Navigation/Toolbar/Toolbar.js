import React from 'react';

import Logo from '../../Logo/Logo'

import classes from './Toolbar.scss';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo>LOGO</Logo>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;