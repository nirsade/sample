import React from 'react';
import { space, width, fontSize, color, colorStyle } from 'styled-system';
import styled from 'styled-components';

const StyledInput = styled.input`
    font-size: 16px;
    font-weight: 300;
    font-family: Muli;
    color: black;
    border: 2px solid #fec001;
    background-color: #fd9574;
    padding: 0;
    text-indent: 5px;
    outline: none;
    border-radius: 5px;
    height: 40px;
    width: 200px;

    ${color}
    ${space}
    ${fontSize}
    ${width}
    ${colorStyle}
    ${props => props.hide && 'width: 0; border: none;'}
`;

export default React.forwardRef((props, ref) => {

    const handleChange = e => {
        const { value } = e.target;
        if (props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <StyledInput {...props} onChange={handleChange} ref={ref} />
    )
})


