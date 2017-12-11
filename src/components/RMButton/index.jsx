import React from 'react';
import Button from '../button';
import { withStyles } from 'material-ui/styles';

const styles = {
    root: {
        width: '1000px'
    }
};

const RMButton = props => {
    return (
        <Button {...props}>{props.children}</Button>        
    );
};

export default withStyles(styles)(RMButton);