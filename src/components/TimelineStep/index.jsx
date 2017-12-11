import React from 'react';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import Typography from 'material-ui/Typography';
import blue from 'material-ui/colors/blue';
import { withStyles } from 'material-ui/styles';

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


const TimelineStep = props => {
    const { classes } = props;
    return (
        <div>
            <Avatar className={classes.greenAvatar}>
                <FolderIcon />
            </Avatar>
            <Typography className={classes.stepText}>Step 1</Typography>
        </div>
    );
}

export default withStyles(styles)(TimelineStep);