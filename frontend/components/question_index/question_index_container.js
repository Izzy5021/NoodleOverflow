import ShowPage from './question_index';
 import { fetchQuestion, showQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
     showQuestion: id => dispatch(showQuestion(id)),
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions
    
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);