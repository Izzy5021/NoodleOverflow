import { RECEIVE_ALL_ANSWERS, RECEIVE_ANSWER, POST_ANSWER } from '../actions/answer_action';


export default (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    console.log("action:", action)
    switch (action.type) {
        case RECEIVE_ANSWER:
            console.log("answers reducer", action.answer)
            // return Object.assign({}, state, {arr: Object.assign([], state.arr, { [action.answer.id] : action.answer })});
            return Object.assign({}, state, action.answer);
        case RECEIVE_ALL_ANSWERS:
            // const questions = [];
    
            // action.questions.forEach(question => {
            //     questions[question.id] = question;
            // });
            // should i entirely replace state here without assigning the id as a key in the obj ask Sami????
            // return action.questions
            return {arr: action.answers};
        case POST_ANSWER:
        //    return nextState[action.question.id] = action.question  
            
            //   return Object.assign({}, state, {arr: Object.assign([], state.arr, action.answer)});
            return Object.assign({}, state, { arr: action.answer });
        default:
        return state;
    }
};
