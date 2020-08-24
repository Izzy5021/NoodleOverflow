import React from 'react';

export default ({ user }) => (
    <header className="nav-bar">
        <h1>Noodle OverfLow</h1>
        <h4>Welcome {user.username}!</h4>
    </header>
);
