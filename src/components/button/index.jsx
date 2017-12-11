import React from 'react';
import MuiButton from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

// const defaultStyles = {
//     width: '200px'
// }

const defaultStyles = {
    root: {
        width: '200px'
    }
}

//buiild in variations for each of them. Not thematic but more logical IE. Delete button vs another one
//goal is to remove design choices from front end at a component level and have everything provided for them

const Button = props => {
    // const styles = !props.style ? defaultStyles : props.style;
    return (
        <MuiButton className={props.classes.root} {...props}>{props.children}</MuiButton>
    );
}

// export default Button;
export default withStyles(defaultStyles)(Button);