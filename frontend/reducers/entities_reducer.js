import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import questionsReducer from './questions_reducer';
import answersReducer from './answers_reducer';
import votesReducer from './vote_reducer';

export default combineReducers({
    users: usersReducer,
    questions: questionsReducer,
    answers: answersReducer,
    votes: votesReducer
});
