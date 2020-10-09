import { getQuestions, getQuestion, postQuestion } from '../utils/question_api_util';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';


const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

export const createQuestion = question => dispatch => postQuestion(question)
    .then(createdQuestion => dispatch(receiveQuestion(createdQuestion)));



export const fetchQuestion = (questionId) => dispatch => {
        return getQuestion(questionId)
            .then(question => dispatch(receiveQuestion(question)));
};
    
export const fetchQuestions = () => dispatch => {
    return getQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)));
};