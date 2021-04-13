import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from "react-router-dom";
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import TestingPage from './pages/TestApiPage';

const Main = (props) => {

    useEffect(() => {
        props.history.push(props.activeRoute)
    }, [props.activeRoute]);

    return (
        <Fragment>
            <div className="main-container">
                <Switch>
                    <Route path='/Profile' component={ProfilePage} />
                    <Route path='/About' component={AboutPage} />
                    <Route path='/List' component={TestingPage} />
                </Switch>
            </div>
            {props.loading &&
                <div className='loader-container'>
                    <div className="loader"><div></div><div></div><div></div><div></div></div>
                </div>
            }
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    const loading = state.ui.pendingRequests > 0;
    return {
        loading,
        activeRoute: state.ui.activeRoute,
    }
};

export default withRouter(connect(mapStateToProps, null)(Main));
