import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Authprovider} from './Context/AuthContext';
import App from './App';
ReactDOM.render(
<React.StrictMode>
    <Authprovider>
        <App/>
    </Authprovider>
</React.StrictMode>,
document.getElementById('root')
)
