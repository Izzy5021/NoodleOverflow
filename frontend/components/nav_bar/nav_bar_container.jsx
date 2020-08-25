import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';


// import { login } from '../../actions/session_action';
import { logout, login } from '../../actions/session_action';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: () => dispatch(login()),
});




export default connect(mapStateToProps, mapDispatchToProps)(NavBar);