import { getAnswers, newAnswer, deleteAnswer } from '../utils/answer_api_util';
export const RECEIVE_ALL_ANSWERS = 'RECEIVE_ALL_ANSWERS';

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const POST_ANSWER = 'POST_ANSWER';
// export const SHOW_QUESTION = 'SHOW_QUESTION';

const receiveAllAnswers = answers => ({
    type: RECEIVE_ALL_ANSWERS,
    answers
});

const receiveAnswer = answer => ({
    type: RECEIVE_ANSWER,
    question
});

const postAnswer = answer => ({
    type: POST_ANSWER,
    answer
});

// const openQuestion = id => ({
//     type: SHOW_QUESTION,
//     id
// });
export const eraseAnswer = id => dispatch => deleteAnswer(id);
   

export const createAnswer = answer => dispatch => newAnswer(answer)
    .then(createdAnswer => dispatch(postAnswer(createdAnswer)));



// export const fetchQuestion = (questionId) => dispatch => {
//         return getQuestion(questionId)
//             .then(question => dispatch(receiveQuestion(question)));
// };
    
export const fetchAnswers = () => dispatch => {
    return getAnswers()
        .then(answers => dispatch(receiveAllAnswers(answers)));
};

// export const showQuestion = (id) => dispatch => {
//     return getQuestion(id)
//         .then(question => dispatch(openQuestion(question)));
// }


