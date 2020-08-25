import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
   

    const display = currentUser ? (
        <div className="nav-loggedin">
            <p>Hello, {currentUser.username}</p>
            <button className="btn-logout" onClick={() => logout()}>log out</button>
        </div>
    ) : (
            <div className="nav-buttons-right">
                
                <Link className="btn-signup" to="/signup">Sign Up</Link>
              
                <Link className="btn-login" to="/login">Log In</Link>
              
                <Link className="btn-demo" to="/login">Demo Log In</Link>
                
                {/* <button onClick={() => login({
            email: "test89@test.com",
            password: "1234567890"
        })}>Demo log in</button> */}
               
            </div>
        );

    return (
        <header className='head' >
            <div className="nav-bar">
                <div className="nav-1">

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
