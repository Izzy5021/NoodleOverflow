import AnswerPage from './answers';
import { fetchQuestions, fetchQuestion, showQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';
import { fetchAnswers, eraseAnswer } from '../../actions/answer_action';
import { updateAnswer } from '../../utils/answer_api_util';


const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    showQuestion: id => dispatch(showQuestion(id)),
    fetchAnswers: () => dispatch(fetchAnswers()),
    eraseAnswer: (id) => dispatch(eraseAnswer(id)),
    updateAnswer: (id) => dispatch(updateAnswer(id))
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions,
    answers: state.entities.answers,
    username: state.entities.users[state.session.currentUserId].username
});


export default connect(mapStateToProps, mapDispatchToProps)(AnswerPage);