import { RECEIVE_ALL_QUESTIONS, RECEIVE_QUESTION } from '../actions/question_action';


export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    console.log("action:", action)
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            const questions = {};
    
            action.questions.forEach(question => {
                questions[question.id] = question;
            });
            // should i entirely replace state here without assigning the id as a key in the obj ask Sami????
            // return action.questions
            return questions;
        case RECEIVE_QUESTION:
        //    return nextState[action.question.id] = action.question  
        console.log("question reducer:", action.question)
            return Object.assign({}, state, { [action.question.id] : action.question });
            // return Object.assign({}, state, { [action.question.id]: action.question });
        default:
            return state;
    }
};
