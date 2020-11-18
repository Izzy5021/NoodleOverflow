import ShowPage from './question_index';
import { fetchQuestion, showQuestion } from '../../actions/question_action';
import { fetchVotes, eraseVote } from '../../actions/vote_action';
import { connect } from 'react-redux';
import { createAnswer, fetchAnswer } from '../../actions/answer_action';


const mapDispatchToProps = dispatch => ({
    fetchQuestion: (id) => dispatch(fetchQuestion(id)),
     showQuestion: id => dispatch(showQuestion(id)),
    createAnswer: answer => dispatch(createAnswer(answer)),
    fetchVotes: () => dispatch(fetchVotes()),
    eraseVote: id => dispatch(eraseVote(id)),
    fetchAnswer: id => dispatch(fetchAnswer(id))
    });


const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    questions:  state.entities.questions
    
});


export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);