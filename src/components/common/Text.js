import { width, space, textStyle, colorStyle, color, typography } from 'styled-system';
import styled from 'styled-components';

export default styled.p`
    align-items: center;
    margin: 0;
    font-family: Muli;
    font-size: 16px;

    ${width}
    ${space}
    ${typography}   
    ${colorStyle}
    ${textStyle}
    ${color}
`