import homePage from './home_page';
 import { fetchQuestions, fetchQuestion, showQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
    showQuestion: id => dispatch(showQuestion(id)),
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions
    
});


export default connect(mapStateToProps, mapDispatchToProps)(homePage);