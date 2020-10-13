import homePage from './home_page';
 import { fetchQuestions } from '../../actions/question_action';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),

    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions
    
});


export default connect(mapStateToProps, mapDispatchToProps)(homePage);