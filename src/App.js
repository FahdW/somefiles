import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import RMButton from './components/RMButton';
import Timeline from './components/timeline';
import styled from 'styled-components';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import { greenA100 } from 'material-ui/colors/green';
import SvgIcon from 'material-ui/SvgIcon';
import Icon from './components/icon';
import TimelineStep from './components/TimelineStep';
// import Stepper from './components/rmstepper';
// import 'typeface-roboto';
// import {purple, red, green} from 'material-ui/colors';


const StyledButton = styled(Button)`
  color: brown;
`;

const theme = c0reateMuiTheme({
  palette: {
    primary: {
      ...green //Always used for primary
    },
    secondary: {
      ...purple //Always used for secondary
    },
    error: red,
  },
});

const HomeIcon = props => (
  <SvgIcon {...props}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

const styles = {
  root: {
    width: '1500px'
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      styles: {
        background: 'brown'
      }
    }
  }
  changeColor = () => {
    console.log('test');
    this.setState({
      styles: {
        background: 'blue'
      }
    });
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <RMButton color="accent" raised>Another test</RMButton>
      </MuiThemeProvider>
      // <Timeline>
      // <Icon />
      //   <TimelineStep />
      // </Timeline>
      // <Stepper />
      // <HomeIcon />
    );
  }
}

export default App;
