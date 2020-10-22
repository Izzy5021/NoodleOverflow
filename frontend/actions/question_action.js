import { getQuestions, getQuestion, newQuestion } from '../utils/question_api_util';
export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS';

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const POST_QUESTION = 'POST_QUESTION';
export const SHOW_QUESTION = 'SHOW_QUESTION';

const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
});

const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
});

const postQuestion = question => ({
    type: POST_QUESTION,
    question
});

const openQuestion = id => ({
    type: SHOW_QUESTION,
    id
});

export const createQuestion = question => dispatch => newQuestion(question)
    .then(createdQuestion => dispatch(postQuestion(createdQuestion)));



export const fetchQuestion = (questionId) => dispatch => {
        return getQuestion(questionId)
            .then(question => dispatch(receiveQuestion(question)));
};
    
export const fetchQuestions = () => dispatch => {
    return getQuestions()
        .then(questions => dispatch(receiveAllQuestions(questions)));
};

export const showQuestion = (id) => dispatch => {
    console.log("im in the show quest action", id);
    // todo: call api and get question object 
    return getQuestion(id)
        .then(question => dispatch(openQuestion(question)));
    //return dispatch(openQuestion(id));
}


