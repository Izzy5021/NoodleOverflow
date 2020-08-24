import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.username}</p>
            <button onClick={() => logout()}>log out</button>
        </div>
    ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
                <Link className="btn" to="/login">Demo Log In</Link>
                {/* <button onClick={() => this.handleDemo()}>Demo log in</button> */}
            </div>
        );

    return (
        <header className="nav-bar">
            <h1 className="logo">NoodleOverFlow</h1>
            <div>
                {display}
            </div>
        </header>
    );
};
