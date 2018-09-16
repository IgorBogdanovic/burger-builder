import React from 'react';

import classes from './DrawerToggle.scss';
import utils from '../../../../assets/scss/utils.scss';

const drawerToggle = (props) => {
    let attachedClasses = [classes.DrawerToggle, utils['u-only-mob']];

    return(
        <div className={attachedClasses.join(' ')} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default drawerToggle;
