import React from 'react';
import { FlexContainer, Text } from '../common';
import { FooterContainer } from './layout.style';

const AppFooter = () => {

    const handleLinkClick = () => {
        window.open('https://github.com/nirsade/sample', '_blank')
    }

    return (
        <FooterContainer>
            <FlexContainer m='0 auto' width='calc(100vw - 100px)' justifyContent='space-between'>
                <Text fontSize='12px'>
                    © Copyright 2021
                </Text>
                <Text fontSize='12px' textStyle='clickable' onClick={handleLinkClick}>
                    code
                </Text>
            </FlexContainer>
        </FooterContainer>
    )
}

export default AppFooter;