import React from 'react';
import { FlexContainer } from '../../components/common';
import ImageInput from '../../components/profile/ImageInput';
import TextInput from '../../components/profile/TextInput';

const ProfilePage = () => (
    <FlexContainer width='600px' m='0 auto' flexDirection='column' alignItems='center' justifyContent='flex-start'>
        <ImageInput />
        <TextInput inputKey='name' />
        <TextInput inputKey='job' />
        <TextInput inputKey='address' />
    </FlexContainer>
)

export default ProfilePage;
