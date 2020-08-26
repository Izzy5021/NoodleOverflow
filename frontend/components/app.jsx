import React from 'react';
import { Route } from 'react-router-dom';
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
                <AuthRoute exact path="/" component={Landing} />
                {/* <Route path="/" component={NavBarContainer} /> */}
                <AuthRoute path="/signup" component={SignupContainer} />
                <AuthRoute path="/login" component={LoginContainer} />
        </div>
    </div>
);