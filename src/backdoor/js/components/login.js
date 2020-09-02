/**
 * Created by Tatav on 20/06/2017.
 */
import React from 'react';

import LoginForm from './Login/loginform';

export default class Login extends React.Component {
    render() {
        return(
            <div className="container">
                <LoginForm />
            </div>
        );
    }
}