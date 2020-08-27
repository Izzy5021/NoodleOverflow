import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        const display = this.props.currentUser ? 
            (
                <div className="nav-loggedin">
                    <div className="nav-logged-1">
                    <p className="greet">Hello, {this.props.currentUser.username}</p>
                    </div >
                    <div className="nav-logged-2">
                    <button className="btn-logout" onClick={() => this.props.logout()}>log out</button>
                    </div>
                </div>
            ) : (
                 <div className="nav-buttons-right">
                    <a  className="nav-right" onClick={() => this.props.login({
                        email: "test89@test.com",
                        password: "1234567890"
                    })}>Demo mode</a>
                    <a  href="#/signup" className="nav-right">Sign up</a>
                    <a  href="#/login" className="nav-right">Log in</a>
                </div> 
            );
        return (
            <div className="topnav" id="myTopnav">
                <a href="#home" className=""><i className="fab fa-stack-overflow"></i> code<span className="flow">overflow</span> </a>
                {display}
            </div>
        );
    };
 };

export default Navbar;