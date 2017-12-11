import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import Stepper, { Step, StepContent } from 'material-ui/Stepper';
import StepLabel from '../StepLabel';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import SvgIcon from 'material-ui/SvgIcon';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import blue from 'material-ui/colors/blue';
import Grid from 'material-ui/Grid';


const styles = {
    greenAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: blue[500],
        display: 'flex'
    },
    stepText: {
        fontSize: 14,
        padding: '1.5rem 0 0 0.5rem',
    }
}


const Stepper = props => {
    const { classes } = props;
    return (
            <Grid container>
                <Avatar className={classes.greenAvatar}>
                    <FolderIcon />
                </Avatar>
                <Typography className={classes.stepText}>Step 1</Typography>                
                <Avatar className={classes.greenAvatar}>
                    <FolderIcon />
                </Avatar>
                <Typography className={classes.stepText}>Step 1</Typography>
            </Grid>
        );
}

export default withStyles(styles)(Stepper);