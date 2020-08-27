import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import Landing from './landing_page/landing_page_container'

export default () => (
    <div>
        <div>
            < NavBarContainer/>
        </div>
        <div>
            <Switch>
                <AuthRoute exact path="/" component={Landing} />
                {/* <Route path="/" component={NavBarContainer} /> */}
                <AuthRoute exact path="/signup" component={SignupContainer} />
                <AuthRoute exact path="/login" component={LoginContainer} />
            </Switch>
        </div>
    </div>
);