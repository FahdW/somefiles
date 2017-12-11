import React, { Component } from 'react';
import styled from 'styled-components';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

// const defaultProps = {
//     fontSize: '12px',
//     textAlign: 'center',
//     color: 'red'
// };

const styles = {
    root: {
        background: 'red'
    }
}

// const styles = {
//     button: {
//         background: 'red',
//         borderRadius: 3,
//         border: 0,
//         color: 'white',
//         height: 48,
//         padding: '0 30px',
//         boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
//     },
// };

// const styles = {
//     background: 'papayawhip',
//     borderRadius: 3,
//     border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
// };

// export default function OverridesClassNames(props) {
//     return (
//         <Button className={MyStyle}>
//             {props.children ? props.children : 'class names'}
//         </Button>
//     );
// }

// const MaterialUIButton = (props) => {
//     console.log(props);
//     /* ... */
//     // As long as props.className is attached, the above usage will work
//     return <Button style={props.styles}>{props.children}</Button>
// }


// const StyledButton = styled(({ ...props }) => <Button {...props} />)``;
// const StyledButton = styled(Button)`
//     root: {
//         background: 'red'
//     }
// `;



// export default withStyles(styles)(StyledButton);
// export default withStyles(styles)(Button);
export default Button;

// export default MaterialUIButton;
// export default StyledButton;