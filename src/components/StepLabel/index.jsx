import {StepLabel} from 'material-ui/Stepper';
import { withStyles } from 'material-ui/styles';

const styles = {
    root: {
        color: 'red'
    },
    active: {
        color: 'yellow'
    },
    completed: {
        color: 'green'
    },
    disabled: {
        color: 'purple',
        fontWeight: 200
    }
}

export default withStyles(styles)(StepLabel);