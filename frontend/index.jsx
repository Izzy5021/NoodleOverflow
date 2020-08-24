//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

//storage is created here (store)
document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    //session is restored if there is a current user on the browser 
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUserId: window.currentUser.id }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    window.getState = store.getState 
    const root = document.getElementById('root');
    ReactDOM.render( <Root store={store} /> , root);
    // ReactDOM.render(<h1>HEllo WORLD</h1>, root);

});


