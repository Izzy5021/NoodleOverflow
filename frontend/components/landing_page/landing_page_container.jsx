import { connect } from 'react-redux';
// import { signup, clearSessionErrors } from '../../actions/session_action'
// import Signup from './signup';
import Landing from './landing_page'
const mapDispatchToProps = dispatch => ({
    // signup: formUser => dispatch(signup(formUser)),
    // clearSessionErrors: () => dispatch(clearSessionErrors())

});


const mapStateToProps = (state) => {

    // console.log("state.errors ", state.errors)
    return {
        // errors: state.errors,
        // formType: 'Log in'
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Landing);