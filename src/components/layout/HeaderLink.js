import React from 'react';
import { connect } from 'react-redux';
import { uiActions } from '../../store/ui/actions';
import { Text } from '../common';

const HeaderLink = props => (
    <Text
        ml='20px'
        onClick={() => props.setRoute(props.name)}
        textStyle={props.activeRoute === props.name ? 'active' : 'clickable'}
    >
        {props.name}
    </Text>
)

const mapStateToProps = (state) => ({
    activeRoute: state.ui.activeRoute
})

const mapDispatchToProps = dispatch => ({
    setRoute: (name) => dispatch(uiActions.setActiveRoute(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(HeaderLink);