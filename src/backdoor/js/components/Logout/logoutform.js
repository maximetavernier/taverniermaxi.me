/**
 * Created by Tatav on 16/11/2017.
 */
import React from 'react';

export default class LogoutForm extends React.Component {
    constructor() {
        super();

        this.handleDisconnect = this.handleDisconnect.bind(this);
    }

    handleDisconnect() {

    }

    render() {
        return(
            <div className="container">
                <i className="devicons devicons-cross close-icon" onClick={this.handleDisconnect}></i>
                <form name="logout" method="post" action="./index.php">
                    <p><input type="hidden" id="logout" name="logout" value="true" /></p>
                </form>
            </div>
        );
    }
}