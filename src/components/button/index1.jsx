import React, {Component} from 'react';
import styled from 'styled-components';
import {Button} from 'semantic-ui-react';

const defaultProps = {
    fontSize: '12px',
    textAlign: 'center',
    color: 'red'
};

const x = `props => props.fontSize ? props.fontSize : defaultProps.fontSize`;

// //Useless use wrapped components or use extend if it is known styled component
// const Title = styled.h1`
// 	font-size: ${props => props.fontSize ? props.fontSize : defaultProps.fontSize};
// 	text-align: ${props => props.textAlign ? props.textAlign : defaultProps.textAlign};
// 	color: ${props => props.color ? props.color : defaultProps.color};
// `;

const StyledButton = styled(({ ...props }) => <Button {...props} />)`
    width: ${({width}) => width};
`;

export default StyledButton;

// Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
// 	padding: 4em;
// 	background: papayawhip;
// `;

// Use Title and Wrapper like any other React component – except they're styled!
// export default class Test extends Component {
//     render() {
//         return (
//             <Wrapper>
//                 <Title>
//                     Hello World, this is my first styled component!
//                 </Title>
//             </Wrapper>
//         );
//     }
// }