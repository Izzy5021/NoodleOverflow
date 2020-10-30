import AnswerPage from './answers';
import { fetchQuestions, fetchQuestion, showQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';
import { fetchAnswers, eraseAnswer } from '../../actions/answer_action';


const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    showQuestion: id => dispatch(showQuestion(id)),
    fetchAnswers: () => dispatch(fetchAnswers()),
    eraseAnswer: (id) => dispatch(eraseAnswer(id))
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions,
    answers: state.entities.answers
});


export default connect(mapStateToProps, mapDispatchToProps)(AnswerPage);