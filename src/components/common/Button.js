import { space, width, fontSize, color, buttonStyle } from 'styled-system';
import styled from 'styled-components';

export default styled.button`
font-size: 16px;
font-family: "Muli";
font-weight: 300;
border-radius: 5px;
width: 220px;
height: 40px;
border: none;
cursor: pointer;
outline: none;
background-color: #fec001;

${space}
${width} 
${color}
${fontSize}
${buttonStyle}
`;
