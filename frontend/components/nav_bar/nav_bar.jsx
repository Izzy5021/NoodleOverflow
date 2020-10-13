import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    
    constructor(props){
        super(props);
        this.handleDemo = this.handleDemo.bind(this);
    }


    handleDemo(e){
        //e.preventDefault();
        const demoUser = {
            email: "test89@test.com",
            password: "1234567890"
         }
        console.log(this.props.history) 
        this.props.login(demoUser)
            .then(() => this.props.history.push('/homePage'));
        console.log('JHelloooo',this.props.history) 

    }

    render(){
        const display = this.props.currentUser ? 
            (
                <div className="nav-loggedin">
                    <div className="nav-logged-1">
                    <p className="greet">Hello, {this.props.currentUser.username}</p>
                    </div >
                    <div className="nav-logged-2">
                        
                    {/* <button className="nav-right" >log out</button> */}
                        <a onClick={() => this.props.logout()} className="nav-right">Log out</a>
                    </div>
                </div>
            ) : (
                 <div className="nav-buttons-right">
                    <a  className="nav-right" onClick={() => this.handleDemo()}>Demo mode</a>
                    <a  href="#/signup" className="nav-right">Sign up</a>
                    <a  href="#/login" className="nav-right">Log in</a>
                </div> 
            );
        return (
            <div className="topnav" id="myTopnav">
                <a href="#/" className="flow-button" disabled><i className="fab fa-stack-overflow"></i> code<span className="flow">overflow</span> </a>
                {display}
            </div>
        );
    };
 };

export default Navbar;