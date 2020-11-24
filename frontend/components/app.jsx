import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container'
import { AuthRoute, ProtectedRoute } from '../utils/route_utils'
import Landing from './landing_page/landing_page_container'
import QuestionFormContainer from './questions/questionFormContainer';
import HomePageContainer from './home_page/home_page_container';
import ShowQuestionContainer from './question_index/question_index_container';
import AnswerPageContainer from './answers/answers_container';
import UpdateAnswerContainer from './answers/update_answers_container';
import SearchContainer from './search/search_container'


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
                <ProtectedRoute exact path="/search/:searchinput" component={SearchContainer}/>
                <ProtectedRoute exact path="/newQuestion" component={QuestionFormContainer} />
                <ProtectedRoute exact path="/homePage" component={HomePageContainer} />
                <ProtectedRoute exact path="/showQuestion/:id" component={ShowQuestionContainer} />
                <ProtectedRoute exact path="/updateAnswer/:id" component={UpdateAnswerContainer} />
                <ProtectedRoute exact path="/answerPage" component={AnswerPageContainer} />
            </Switch>
        </div>
    </div>
);