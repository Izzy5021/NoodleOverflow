import { RECEIVE_VOTES, RECEIVE_VOTE, POST_VOTE } from '../actions/vote_action';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case POST_VOTE:
            return Object.assign({}, { vote : action.vote});
        case RECEIVE_VOTE: 
            return Object.assign({}, state, action.vote);
        case RECEIVE_VOTES: 
            return {arr: action.votes};
        default:
            return state;
    }
}