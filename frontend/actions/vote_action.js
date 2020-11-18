import { upVote, getVotes, getVote, deleteVote } from '../utils/vote_api_util';

export const RECEIVE_VOTES = 'RECEIVE_VOTES';
export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const POST_VOTE = 'POST_VOTE';
export const DELETE_VOTE = 'DELETE_VOTE';

const receiveVotes = votes => ({
    type: RECEIVE_VOTES,
    votes
});

const receiveVote = vote => ({
    type: RECEIVE_VOTE,
    vote
});

const postVote = vote => ({
    type: POST_VOTE,
    vote
});

const eliminateVote = answer => ({
    type: DELETE_VOTE
})

// const openQuestion = id => ({
//     type: SHOW_QUESTION,
//     id
// });

export const createVote = vote => dispatch => upVote(vote)
    .then(createdvote => dispatch(postVote(createdvote)));


export const fetchVote = (id) => dispatch => {
        return getVote(id)
            .then(vote => dispatch(receiveVote(vote)));
};
    
export const fetchVotes = () => dispatch => {
    return getVotes()
        .then(votes => dispatch(receiveVotes(votes)));
};


export const eraseVote = (id) => dispatch => {
    return deleteVote(id)
        .then(deletedVote => dispatch(eliminateVote()))
};
// export const showQuestion = (id) => dispatch => {
//     return getQuestion(id)
//         .then(question => dispatch(openQuestion(question)));
// }


