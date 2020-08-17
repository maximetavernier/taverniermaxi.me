/**
 * Created by Tatav on 16/11/2017.
 */
import React from 'react';

import LogoutForm from './Logout/LogoutForm';

export default class Logout extends React.Component {
    render() {
        return(
            <div className="container">
                <LogoutForm />
            </div>
        );
    }
}