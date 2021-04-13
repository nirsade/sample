import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { uiActions } from '../../store/ui/actions';
import { FileInput, Image, Text } from '../common';
import {getFromLocal, saveToLocal } from './../../helpers/storage';

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 2px solid #f0761e;
`;

const ImageInput = props => {
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const storageImage = getFromLocal('profileImage');
        if (storageImage) setImage(storageImage);
    }, []);

    const handleClick = e => {
        inputRef.current.click();
    }

    const handleImageChange = value => {
        saveToLocal('profileImage', value);
        setImage(value);
    }

    return (
        <ImageContainer onClick={handleClick}>
            {image ? <Image src={image} height='80px' width='80px' rounded />
                :
                <Text textStyle='clickable' color='#fba832'>ADD</Text>
            }
            <FileInput ref={inputRef} onChange={handleImageChange} />
        </ImageContainer>
    )
}

const mapStateToProps = (state) => ({
    activeRoute: state.ui.activeRoute
})

const mapDispatchToProps = dispatch => ({
    setRoute: (name) => dispatch(uiActions.setActiveRoute(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(ImageInput);