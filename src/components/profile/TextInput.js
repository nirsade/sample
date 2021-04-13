import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button, FlexContainer, Input, Text } from '../common';
import { getFromLocal, saveToLocal } from './../../helpers/storage';
import { userActions } from '../../store/user/actions';

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 220px;
    padding-left: 10px;
    border-radius: 5px;
    border: 2px solid #fec001;
`;

const TextInput = props => {
    const [value, setValue] = useState('');
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const storageValue = getFromLocal(props.inputKey);
        if (storageValue) {
            setValue(storageValue);
        }
    }, []);

    const handleClick = v => {
        if (editMode) {
            saveToLocal(props.inputKey, value);
            dispatch(userActions.setUserData(props.inputKey, value));
        } else {
            inputRef.current.focus();
        }
        setEditMode(!editMode);
    }

    const handleTextChange = value => {
        setValue(value);
    }

    return (
        <FlexContainer width='500px' justifyContent='space-between' mt='50px'>
            {!editMode && <TextContainer><Text>{value}</Text></TextContainer>}
            <Input
                value={value} ref={inputRef}
                onChange={handleTextChange} hide={!editMode}
                maxLength='20'
                placeholder='enter your words'
            />
            <Button onClick={handleClick}>
                {editMode ? `Save ${props.inputKey}` : `${value ? 'Edit' : 'Add'} ${props.inputKey}`}
            </Button>
        </FlexContainer>
    )
}

export default TextInput;