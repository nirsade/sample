import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { FlexContainer, Image, Text } from '../../components/common';
import { generalActions } from '../../store/generalActions';
import { AbsoluteOpacity } from '../../components/layout/layout.style';

const TestingPage = props => {

    const [picturesArray, setPicturesArray] = useState([]);

    useEffect(() => {
        props.getPhotos((data) => {
            setPicturesArray(data);
        })
    }, [])

    return (
        <Fragment>
            <FlexContainer flexDirection='column' alignItems='center' justifyContent='flex-start'>
                {picturesArray.map((item, index) => (
                    <FlexContainer key={index} width='400px' justifyContent='space-between' mb='20px'>
                        <Text >
                            {item.author}
                        </Text>
                        <Image alt='loading..' height='50px' width='50px' src={item.download_url} />
                    </FlexContainer>
                ))}
            </FlexContainer>
            <AbsoluteOpacity top />
            <AbsoluteOpacity />
        </Fragment>
    );
}

const mapDispatchToProps = dispatch => ({
    getPhotos: (callback) => dispatch(generalActions.getPhotosList(callback))
})

export default connect(null, mapDispatchToProps)(TestingPage);
