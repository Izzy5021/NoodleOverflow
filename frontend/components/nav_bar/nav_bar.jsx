import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
// export default ({ currentUser, logout }) => {
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

                    <Link className="btn-signup" to="/signup">Sign Up</Link>

                    <Link className="btn-login" to="/login">Log In</Link>

                    {/* <Link className="btn-demo" to="/login">Demo Log In</Link> */}

                    <button className="demo"
                        onClick={() => this.props.login({
                            email: "test89@test.com",
                            password: "1234567890"
                        })}
                    >Demo mode</button>

                </div>
            );
        return (
            <header className='head' >
                <div className="nav-bar">
                    <div className="nav-1">
                        <i className="fab fa-stack-overflow"></i>
                        {/* <i className="fab fa-stack-overflow"></i> */}
                        <h3 className="logo">NoodleOverFlow</h3>
                    </div>  
                    <div className="nav-2">
                    </div>
                    <div className="nav-3">
                        
                        {display}
                    </div>
                </div>
            </header>
        );
    };
 };

export default Navbar;