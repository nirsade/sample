import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../store/user/actions';
import { FlexContainer, Text } from '../common';
import HeaderLink from './HeaderLink';
import { HeaderContainer } from './layout.style';

const AppHeader = props => (
    <HeaderContainer>
        <FlexContainer width='600px' m='auto' justifyContent='flex-start' alignItems='flex-end'>
            <Text fontSize='24px' mr='20px'>MyApp</Text>
            <HeaderLink name='Profile' />
            <HeaderLink name='About' />
            <HeaderLink name='List' />
            <FlexContainer flex='4' justifyContent='flex-end'>
                <Text >{props.username}</Text>
            </FlexContainer>
        </FlexContainer>
    </HeaderContainer>
)

const mapStateToProps = (state) => ({
    activeRoute: state.ui.activeRoute,
    username: state.user.name
})

const mapDispatchToProps = dispatch => ({
    logIn: (data) => dispatch(userActions.logIn(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);