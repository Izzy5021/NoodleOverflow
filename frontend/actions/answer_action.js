import { getAnswer, newAnswer } from '../utils/answer_api_util';
// export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

// export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const POST_ANSWER = 'POST_ANSWER';
// export const SHOW_QUESTION = 'SHOW_QUESTION';

// const receiveAllQuestions = questions => ({
//     type: RECEIVE_ALL_QUESTIONS,
//     questions
// });

// const receiveQuestion = question => ({
//     type: RECEIVE_QUESTION,
//     question
// });

const postAnswer = answer => ({
    type: POST_ANSWER,
    answer
});

// const openQuestion = id => ({
//     type: SHOW_QUESTION,
//     id
// });

export const createAnswer = answer => dispatch => newAnswer(answer)
    .then(createdAnswer => dispatch(postAnswer(createdAnswer)));



// export const fetchQuestion = (questionId) => dispatch => {
//         return getQuestion(questionId)
//             .then(question => dispatch(receiveQuestion(question)));
// };
    
// export const fetchQuestions = () => dispatch => {
//     return getQuestions()
//         .then(questions => dispatch(receiveAllQuestions(questions)));
// };

// export const showQuestion = (id) => dispatch => {
//     return getQuestion(id)
//         .then(question => dispatch(openQuestion(question)));
// }


