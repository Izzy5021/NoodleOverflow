import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import NavBar from './nav_bar';


import { logout, login } from '../../actions/session_action';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.currentUserId],
    
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    login: formUser => dispatch(login(formUser)),
});




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));