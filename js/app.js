import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container.js';

let navigated = function() {
    let hash = window.location.hash;
    hash = hash.substring(1)
    let component = < Container / >
        switch (hash) {
            case '\/':
            case '':
                component = < Container / >
                    break;

            default:
                component = < div > Not found < /div>  
        }

    ReactDOM.render((
        component
    ), document.getElementById("container"));
}

navigated();
window.addEventListener('hashchange', navigated, false);
