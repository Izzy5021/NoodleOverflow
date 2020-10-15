import ShowPage from './question_index';
 import { fetchQuestion } from '../../actions/question_action';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    fetchQuestion: () => dispatch(fetchQuestion()),
 
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions
    
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);