import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session_action'
import Login from './login';

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

const mapStateToProps = (state ) => {
    
    
    return {
        errors: state.errors,
        formType: 'Log in'
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);


