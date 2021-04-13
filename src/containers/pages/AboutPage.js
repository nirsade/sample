import React from 'react';
import { FlexContainer, Text } from '../../components/common';

const AboutPage = () => (
    <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start'>
        <Text fontSize='26px'>
            {'React + Redux'}
        </Text>
        <Text fontSize='22px'>{'&'}</Text>
        <Text fontSize='22px'>{'Styled Components'}</Text>
    </FlexContainer>
)

export default AboutPage;
