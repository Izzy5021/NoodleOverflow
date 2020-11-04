import UpdateAnswer from './update_answers';
import { fetchQuestions, fetchQuestion, showQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';
import { fetchAnswers, fetchAnswer  } from '../../actions/answer_action';
import { updateAnswer } from '../../utils/answer_api_util';


const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    showQuestion: id => dispatch(showQuestion(id)),
    fetchAnswer: (id) => dispatch(fetchAnswer(id)),
    fetchAnswers: () => dispatch(fetchAnswers()),
    eraseAnswer: (id) => dispatch(eraseAnswer(id)),
    updateAnswer: (id) => dispatch(updateAnswer(id))
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions,
    answers: state.entities.answers
});


export default connect(mapStateToProps, mapDispatchToProps)(UpdateAnswer);