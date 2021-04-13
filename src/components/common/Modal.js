import React from 'react';
import { color, layout } from 'styled-system';
import styled from 'styled-components';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
    width: 422px;
    height: 457px;
    max-height: 90vh;
    position: relative;
    border-radius: 3px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
    
    ${layout}
    ${color}
`

export default (props) => (
    <ModalContainer >
        <ModalBox {...props}>
            {props.children}
        </ModalBox>
    </ModalContainer>
)