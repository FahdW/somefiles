import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepContent } from 'material-ui/Stepper';
import StepLabel from '../StepLabel';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import SvgIcon from 'material-ui/SvgIcon';
import Icon from 'material-ui/Icon';
import Calendar from '../../svg/calendar.svg';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
// import CalendarIcon from 'svg-react-loader?name=CalenderIcon!../../svg/calendar.svg';
// import StepConnector from 'material-ui/StepConnector';

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginTop: theme.spacing.unit,
    },
    resetContainer: {
        marginTop: 0,
        padding: theme.spacing.unit * 3, // TODO: See TODO note on Stepper
    },
    transition: {
        paddingBottom: 4,
    },
});

function getSteps() {
    return ['Order Received', 'Title Order in Progress', 'Title Commitment Issued', 'Lender Clear to Close', 'Signing Scheduled', 'Signing Complete'
    , 'Funds Disbursed', 'Documents Recorded'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}

const HomeIcon = props => (
    <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
);

const StepIcon = props => {
    return <Icon>add_circle</Icon>;
}

const CalendarIcon = props => {
    <SvgIcon {...props}>
        <polyline id="Shape" points="24 8 24 25 0 25 0 8"></polyline>
        <rect id="Rectangle-path" x="0" y="3" width="24" height="6"></rect>
        <path d="M13,0 L13,4" id="Shape"></path>
        <path d="M6,0 L6,4" id="Shape"></path>
        <path d="M19,0 L19,4" id="Shape"></path>
    </SvgIcon>
}

const TestIcon = props => {
    return (
        <Avatar>
            <FolderIcon />
        </Avatar>
    );
}

class VerticalLinearStepper extends React.Component {
    state = {
        activeStep: 3,
    };

    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

//TODO: check viewport size change orientation based on it.
//TODO: Change Connectors
//TODO: Change Icons
//TODO: Change Fonts of it while inactive
//TODO: Get Icon and convert it to SVG
//Typography component is inside step label making it hard to change font color of steps yet to be done
    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel Icon={<TestIcon />}>{label}</StepLabel> 
                                <StepContent classes={{ transition: classes.transition }}>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&quot;re finished</Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
            </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

VerticalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);

//Connector is changable
//Change active styles